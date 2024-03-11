import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'
import bcrypt from 'bcrypt';
import User from "./Schema/User.js";
import { nanoid } from "nanoid";
import jwt from 'jsonwebtoken';
import admin from "firebase-admin";
//import serviceAccountKey from "./serviceAccountKey.json" with { type: "json"};
import { getAuth } from "firebase-admin/auth";
import { OAuth2Client } from "google-auth-library";
import firebaseAdmin from "firebase-admin";

const server = express();
const PORT = 3001;

/*admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey)
})*/

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

server.use(express.json());
server.use(cors());

if (!process.env.DB_LOCATION) {
  console.error("DB_LOCATION environment variable is not defined");
  process.exit(1);
}
if (!process.env.SECRET_ACCESS_KEY) {
  console.error("SECRET_ACCESS_KEY environment variable is not defined");
  process.exit(1);
}
if (!process.env.FRONT_END) {
  console.error("Front end environment variable is not defined");
  process.exit(1);
}

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

mongoose.connect(process.env.DB_LOCATION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true
});

//AWS

/*const s3 = new aws.S3({
  region:'us-east-2',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccesKey: process.env.AWS_SECRET_ACCESS_KEY
})*/

const formatDatatoSend = (user) => {
  const access_token = jwt.sign({ id: user._id}, process.env.SECRET_ACCESS_KEY);

  return {
    access_token,
    profile_img: user.personal_info.profile_img,
    username: user.personal_info.username,
    fullname: user.personal_info.fullname
  }
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

const generateUsername = async (email) => {
  let username = email.split("@")[0];
  let usernameUnique = await User.exists({"personal_info.username" : username}).then((result) => result);
  usernameUnique ? username += nanoid().substring(0,5): "";
  return username;
}


server.post("/signup", async (req, res) => {
  try{
  let { fullname, email, password } = req.body;
  
  if(fullname.length < 3){
    return res.status(403).json({"error": "Fullanme must be at least 3 letters long"});
  }
  if(!emailRegex.test(email)){
    return res.status(403).json({"error": "Incorrect Email Format"});
  }
  if(!passwordRegex.test(password) ){
    return res.status(403).json({"error": "Password incorrect format"});
  }

  bcrypt.hash(password, 10, async (err, hashed_password) => {
    let username = await generateUsername(email);

    let user = new User({
      personal_info: { fullname, email, password: hashed_password, username}
    })

    user.save().then((u) => {
      return res.status(200).json(formatDatatoSend(u));
    })
    .catch(err => {
      return res.status(500).json({"error": err.message });
    })
  })
} catch (error){
  console.error(error);
  return res.status(500).json({"error": "Internal Server Error"});
}
})

server.post("/signin", async (req, res) =>{
  try{
  let { email, password } = req.body;
  
  User.findOne({ "personal_info.email" : email })
  .then((user) => {
    if(!user){
      return res.status(403).json({"error": "Email not found"})
    }

    if(!user.google_auth){
    
      bcrypt.compare(password, user.personal_info.password, (err, result) => {
        if(err){
          return res.status(403).json({"error": "Error occurred during login. Please Try Again"});
        }
        if(!result){
          return res.status(403).json({"error": "Incorrect Login. Please Try Again"});
        } else {
          return res.status(200).json(formatDatatoSend(user));
        }
      })
    
    } else {
      return res.status(403).json({"error": "Acount was created using Google. Try logging in with Google."})
    }
  
  })
  .catch(err => {
      console.log(err.message);
      return res.status(500).json({"error": err.message})
    })
  } catch (error){
    console.error(error);
    return res.status(500).json({"error": "Internal Server Error"});
  }
})

server.post("/google-auth", async (req, res) => {
  let { access_token } = req.body;

  getAuth().verifyIdToken(access_token).then(async (decodedUser) => {
    let { email, name, picture } = decodedUser;

    picture = picture.replace("s96-c", "s384-c");

    let user = await User.findOne({"personal_info.email": email}).select("personal_info.fullname personal_info.username personal_info.profile_img google_auth").then((u) => {
      return u || null
    }).catch(err => {
      return res.status(500).json({"error": err.message})
    });

    if(user){ //login
      if(!user.google_auth){
        return res.status(403).json({"error": "This email was signed up without google. Please log in with a password to access the account"})
      }
    }
    else { //signup. Storing user in database
      let username = await generateUsername(email);

      user = new User({
        personal_info: { fullname: name, email, profile_img: picture, username },
        google_auth: true
      })

      await user.save().then((u) => {
        user = u;
      }).catch(err => {
        return res.status(500).json({"error": err.message})
      })
    }
    return res.status(200).json(formatDatatoSend(user)
  )
}).catch(err => {
    res.status(500).json({"error": "Failed to authenticate you with Google. Try with some other google account."})
  });

});



/*server.post("/google-auth", async (req, res) => {
  const { access_token } = req.body;
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  try {
    // Verify the Google OAuth token
    const ticket = await client.verifyIdToken({
      idToken: access_token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const { email, name, picture } = ticket.getPayload();

    // Exchange Google OAuth token for a Firebase ID token
    const firebaseToken = await firebaseAdmin.auth().createCustomToken(email);

    // Return the Firebase ID token
    res.status(200).json({ firebaseToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ "error": "Failed to authenticate with Google" });
  }
});*/


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
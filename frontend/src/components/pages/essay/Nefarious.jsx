import { Link } from 'react-router-dom';

function Nefarious() {
    return (
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div className="lg:w-4/5 sm:w-7/8 m-auto">
    <div className="text-2xl font-bold text-center">Nefarious: A Movie Review</div>
    <p className="text-sm text-center text-dark dark:text-bg-gray p-5">
      Michael Fahnlander 9/3/23
    </p>
    <div className="text-lg font-bold text-center">My Review</div>
    <div classNameName="video-responsive m-auto">
      <iframe 
      src={`https://www.youtube.com/embed/_76ajCb5E4g`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className='w-1/2 h-1/6'
    />
  </div>
  <p className="text-sm text-dark dark:text-bg-gray p-5">
    Nefarious is one of the most accurate, damndest, and unsettling interpretations of demonic possession since at least the Exorcism of Emily Rose, another famous and historically accurate exorcism movie. This is not a happy, feel-good Christian movie. It is a dark movie, but is not needlessly so. The modern, "enlightened" person fails to recognize the spiritual battle that rages around them, and I think this is an eye-opening movie intended for those people. It interestingly portrays the growing struggle between the traditional Catholic church that retains its mission and values, and the modern church that emphasizes inclusivity, tolerance, and diversity. That is a topic for another day, however I will say that the more the church and her priests deviate from the explicit mission of bringing people to God, the less of God's authority they can expect to wield. There is a great scene in the movie that exemplifies this.
  </p>
  <p className="text-sm text-dark dark:text-bg-gray p-5">
    The movie does justice to Satan's point of view as those not familiar with Theology (the study of God) can understand the points of view of the characters, and it is an excellent crashcourse to the bigger conflict on which this movie is predecated without being preachy, cringe, or out of place.
  </p>
  <div className="text-lg font-bold text-center">Response to Criticism</div>
  <p className="text-sm text-dark dark:text-bg-gray p-5">
    I have heard a number of criticisms of the movie Nefarious, including that it is not representative of the battle between God and Satan, and that the directors and creators of the movie are Mormans and either cannot understand or seek to deliberately confuse various theological points. 
  </p>
  <p className="text-sm text-dark dark:text-bg-gray p-5">
    First, <div className='uppercase font-bold italic'>spoiler alert</div>. As for the first argument against the movie, I do not think it is wrong in to portray Satan as victorious as long as it is for a greater purpose. For example, the movie does not portray the unrepentance and death of Edward Wayne Brady as a good or positive thing in any way. The bleakness of Brady's condition in prison and his fate at the end of the movie strip away the appeal of living an immoral life, perhaps to obtain money, power, or influence. His death is gritty and hard to watch, and any religious person watching the movie hopes for a last minute change of heart, but are disappointed with his choices despite many opportunities. A number of people have told me that they went to confession immediately after watching the movie.
  </p>
  <p className="text-sm text-dark dark:text-bg-gray p-5">
      This raises a question about whether that is a good thing since confession done out of fear does not involve genuine contrition for sins and rather a sense of preservation for self, but I suppose only God knows what goes on in the soul. I personally think that this movie has merit in that area.
  </p>
  <p className="text-sm text-dark dark:text-bg-gray p-5">
    <Link className='text-lowTeal underline hover:text-midTeal'>The Exorcist Files</Link> is an excellent podcast on Spotify that describe some of the more memorable excorcists that a Catholic priest has unertaken. They include Catholic theology and have religious merit, but one should be cautious not to seek to acquiant oneself too intimately with demonic powers. 
    </p>
  </div>
</div>
    );
}

export default Nefarious;
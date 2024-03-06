import lab from '../../images/server/HomeLab.png';
import network from '../../images/server/Network.png';
import { Link } from 'react-router-dom';

function Server() {
return (
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div className="lg:w-4/5 sm:w-7/8 mr-auto ml-auto">
    <h1 className="text-dark text-lg dark:text-bg-gray font-bold text-center">Proxmox Home Lab</h1>

    <div className="ml-auto mr-auto">
      Earlier this year, I bought a server off of Amazon with the intention of building a home lab. Over the course of this semester, I have built out a webserver, reverse engineering lab, and security tool environment where I have set up a Wazuh server to collect logs from endpoints. I have learned a ton through this project. I use Zero-Tier to remotely access my server and use system firewalls with Fail2Ban to protect public-facing services. This Github repository has proven extremely valuable for setting up the Proxmox instance, including making a dark mode, adding certain packages, and disabling annoying warning notifications: 
      <Link className="text-lowTeal" to='https://tteck.github.io/Proxmox'> Github</Link>
    </div>
    <img className="lg:w-3/5 md:w-4/5 xl:2/5 sm:w-4/5 ml-auto mr-auto pt-5 pb-5" alt='' src={lab}></img>
    <div className="ml-auto mr-auto">
      This is a network diagram I made that shows the networking situation of the server. I used vlans with a virtualized PFsense firewall to segment the network and prevent networks from communicating like if malware detonates on the reverse-engineering vlan.
    </div>
    <img className="w-6/7 ml-auto mr-auto pt-5 pb-5" alt='' src={network}></img>
    <div className="ml-auto mr-auto">
      Setting up PFsense and Proxmox are fairly straightforward adventures, but there are a few oddities that I ran into, and if I hadn't had the help of a friend, would not have figured them out. Proxmox likes to have control over the physical disks, so you might have to disable the raid controller on your server and delete any raid configurations. All of that can be configured later in the Proxmox web interface or on the commandline if you are very brave. According to people on the Proxmox forum, the hypervisor tends to read and write a lot, so booting from a thumbdrive is not ideal because you risk burinng it out. Like the screenshot shows, you need a gateway address for the Proxmox interface so it knows where to go. For any interfaces assigned to PFsense, leave their information blank since a{')'} you probably only have one router in your network and therefore can't have the same gateway twice and b{')'} PFsense will handle the IP addressing and Proxmox will only interfere with that.
    </div>                 
  </div>

</div>
    );
}

export default Server;
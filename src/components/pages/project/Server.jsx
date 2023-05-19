import React from 'react';
import '../../../App.css';
import lab from '../../images/server/HomeLab.png';
import { Link } from 'react-router-dom';

function Server() {
return (
<div class="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div class="lg:w-4/5 sm:w-7/8 mr-auto ml-auto">
    <h1 class="text-dark text-lg dark:text-bg-gray font-bold text-center">Proxmox Home Lab</h1>

    <p class="ml-auto mr-auto">
      Earlier this year, I bought a server off of Amazon with the intention of building a home lab. Over the course of this semester, I have built out a webserver, reverse engineering lab, and security tool environment where I have set up a Wazuh server to collect logs from endpoints. I have learned a ton through this project. I use Zero-Tier to remotely access my server and use system firewalls with Fail2Ban to protect public-facing services. This Github repository has proven extremely valuable for setting up the Proxmox instance, including making a dark mode, adding certain packages, and disabling annoying warning notifications: 
      <Link class="text-lowTeal" to='https://tteck.github.io/Proxmox'> Github</Link>
    </p>
    <img class="lg:w-2/5 md:w-4/5 xl:2/5 sm:w-4/5 ml-auto mr-auto pt-5 pb-5" alt='' src={lab}></img>
    <p class="ml-auto mr-auto">
      This is a network diagram I made that shows the networking situation of the server. I used vlans with a virtualized PFsense firewall to segment the network and prevent networks from communicating like if malware detonates on the reverse-engineering vlan.
    </p>                
  </div>

</div>
    );
}

export default Server
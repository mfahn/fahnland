import React from 'react';
import '../../../App.css';
import lab from '../../images/server/HomeLab.png';

function Server() {
return (
<div class="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg text-center dark:text-bg-gray dark:bg-navy">
  <h1 class="text-dark text-lg dark:text-bg-gray font-bold">Proxmox Home Lab</h1>

  <p class="w-4/5 ml-auto mr-auto">
    Earlier this year, I bought a server off of Amazon with the intention of building a home lab. Over the course of this semester, I have built out a webserver, reverse engineering lab, and security tool environment where I have set up a Wazuh server to collect logs from endpoints. I have learned a ton through this project. I use Zero-Tier to remotely access my server and system firewalls with Fail2Ban to protect public-facing services. This Github repository has proven extremely valuable for setting up the Proxmox instance, including making a dark mode, adding certain packages, and disabling annoying warning notifications: 
    <p class="inline"><a href='https://tteck.github.io/Proxmox'>https://tteck.github.io/Proxmox/</a></p>
  </p>
  <img class="w-3/5 ml-auto mr-auto" alt='' src={lab}></img>
  <p class="w-4/5 ml-auto mr-auto">
    This is a network diagram I made that shows the networking situation of the server. I used vlans with a virtualized PFsense firewall to segment the network and prevent networks from communicating like if malware detonates on the reverse-engineering vlan.
  </p>
  <div class="text-base w-3/5 ml-auto mr-auto">
    sudo nano /etc/netplan/00-netplan.yaml

    network:
      version: 2
      renderer: networkd
      ethernets:
        ens18:
          dhcp4: false
          dhcp6: false
        addresses:
          - 192.168.0.10/24
        routes:
          - to: default
            via: 192.168.0.1
        nameservers:
          addresses: [192.168.0.1]

    sudo netplan apply
    ip a  
  </div>              
</div>
    );
}

export default Server
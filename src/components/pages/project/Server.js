import React from 'react';
import '../../../App.css'

function Server() {
    return (
        <div class="mt-5 m-auto p-5 w-3/5 text-dark bg-bg-gray rounded-lg text-center">
            <div>
                Proxmox
                https://tteck.github.io/Proxmox/

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
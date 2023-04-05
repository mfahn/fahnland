import React from 'react';
import '../../../App.css'

function Incident() {
    return (
<div class="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg text-center dark:text-bg-gray dark:bg-navy">
  <div class="lg:w-4/5 sm:w-7/8 mr-auto ml-auto">
    <h1 class="text-lg">Background</h1>
      <p class="m-auto p-5">
        My roomate's parents gave me their all-in-one computer that they said is infected with malware. They told me that their bank accounts had been compromised shortly after calling with who they thought was a Microsoft tech support person. After talking with the tech support person, my friend's dad realized something was wrong and hung up. That day, he noticed suspicious transactions and froze all of their accounts. I suspect that they clicked a malicious link, or downloaded malware that spammed popups with the service number. On the phone with the hacker, he might have given access to the hacker with a legitimate remote access application which allowed the hacker to perpetrate the attack. From there, the hacker likely installed malware such as a keylogger to exfiltrate banking credentials that they used to access my friend's parents' bank acocunt. I could easily just wipe the drive and install a new operating system, but that would be no fun, and my friend's parents would never find out what was going on with their computer. I'll need to plan out what I will do to figure out what is going on with this computer in a way that doesn't expose my network to .
      </p>
      <h1 class="text-lg">Gameplan</h1>
      <p class="m-auto p-5">
        I am going to assume that there is active malware on this computer and that it could be exfiltrating data to malicious actors, so at least at the beginning, I will not connect it to the internet. To tackle this, I'd like to start at the network layer to figure out where any unsavory things might be trying to connect to. Start with Network and then move to processes active on the computer
      </p>
        Network
        Brim 
        RITA 
        Suricata 
        
        listening connections, open ports, services

      Processes 
        Running Processes

        ProcessHacker 
        State of Windows Defender 

      <p class="m-auto p-5">
        Unfortunately, this type of story is all too common and is nothing to laugh at since people have lost their life savings from such scams. In this case, my friend's parents were able to lock down their accounts before anything could be stolen from them.
      </p>    
  </div>

</div>
    );
}

export default Incident
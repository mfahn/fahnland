import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import Switch from '../../images/incident-response/switch.png';
import Redline from '../../images/incident-response/redline.png';
import Warning from '../../images/incident-response/warning.png';

function Incident() {
    return (
<div class="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg text-center dark:text-bg-gray dark:bg-navy">
  <div class="lg:w-4/5 sm:w-7/8 m-auto text-center">
    <h1 class="text-lg">Background</h1>
    <p class="p-5 text-center">
      My roomate's parents gave me their all-in-one computer that they said is infected with malware. They told me that their bank accounts had been compromised shortly after calling with who they thought was a Microsoft tech support person. After talking with the tech support person, my friend's dad realized something was wrong and hung up. That day, he noticed suspicious transactions and froze all of their accounts. I suspect that they clicked a malicious link, or downloaded malware that spammed popups with the service number. On the phone with the hacker, he might have given access to the hacker with a legitimate remote access application which allowed the hacker to perpetrate the attack. From there, the hacker likely installed malware such as a keylogger to exfiltrate banking credentials that they used to access my friend's parents' bank account. I could easily just wipe the drive and install a new operating system, but that would be no fun, and my friend's parents would never find out what was going on with their computer. I'll need to plan out what I will do to figure out what is going on with this computer in a way that doesn't expose my network to threats and the parents' data to malicious actors.
    </p>
    <h1 class="text-lg">Gameplan</h1>
    <p class="p-5">
      I will start the investigation at the network layer. Obviously, it is a risk to my friend's parents if I connect it to the internet right away. The initial plan was to set up a network with Inetsim on a virtual machine to answer DNS and file requests to get a feel for what the infected computer is requesting. I looked into a number of solutions like setting up a VMware network to get the virtual and physical computers to communicate. Brian Carr has two really solid tutorials for setting up a virtual environment with Inetsim for monitoring traffic. The major benefit of this tool is that it captures all request at the network layer that happen before an analyst can set up a client solution like Wireshark to capture traffic.
      <div>
      <Link class="hover:text-lowTeal text-center text-lowTeal dark:text-lowTeal dark:hover:text-teal" to="https://www.briancarr.org/post/adventures-with-inetsim">Inetsim Tutorial</Link>
      </div>
      <div>
        <Link class="hover:text-lowTeal text-center text-lowTeal dark:text-lowTeal dark:hover:text-teal" to="https://www.briancarr.org/post/creating-a-virtual-network">VMWare Network Tutorial</Link>
      </div>
    </p>

    <p class="p-5">
      Unfortunately, I could not get my Remnux vm to communicate with the physical computer after many hours of troubleshooting. My next idea was to set up my physical Cisco 3750 switch with a VLAN for the two machines. The Remnux with Inetsim could be Bridged directly into the switch and the infected computer obviously has an ethernet port. The Remnux's IP would be the DNS server so any requests from the infected machine would be forewarded to Inetsim. Like many of the other ideas I had, this fell flat as my efforts to configure the switch (which I bought from my college when they upgraded hardware) was not the primary server for the previous VLAN database. Cisco switches have a neat feature that allows one switch to serve out configurations to other Cisco switches on a network so a network engineer does not have to manually console or SSH into each one to configure them. Despite being almost 20 years old and having been flashed at least twice, the switch managed to still contain the original configuration.
    </p>
    <p class="p-5">
      I imagine the problem and solution are glaringly obvious, but they are eluding me right now. The problem revolves around getting the switch into VTP Server mode even though it already says it is in the correct mode. 
    </p>
    <img src={Switch} alt="" title="Switch Config"></img>
    <p class="p-5">
      At this point, I had been troubleshooting things all day and wanted to get my hands dirty with some actual evidence instead of making the perfect setup for this project but not actually doing any investigating. I had also reached the edge of my admittedly slim knowledge of Cisco switches. 
    </p>

    <p class="p-5">
      If I had more time, I would have plugged the infected computer directly into one of my server's four ethernet NICs and configured Proxmox to network that directly into my reverse-engineering lab where I have another Remnux VM. In hindsight, that would have been the easiest path, but unfortunately hindsight is 20/20 and I just wanted to get the project off my plate.
    </p>

    <p class="p-5">
      Now, my idea is to transfer a Wireshark installation binary and some other investigative tools onto the infected computer and run a Redline investigation to be analyzed later. The game plan is to acquire a Redline image and a simultaneous Wireshark capture to run through my SELKS stack, which is a network security toolset, and RITA, which detects Command and Control (C2) beacons. It would be really cool to take a forensic image of the disk, but I do not have the equipment to do that. The Redline tool will collect a memory capture that will include processes, open ports, active connections, services, etc. It is a super valuable tool, and frankly, I am surprised that it is free (not that I am complaining).
    </p>

    <img src={Redline} alt="" title="Redline"></img>
    <div>
      <Link class="dark:text-lowTeal text-lowTeal ml-auto mr-auto text-center dark:hover:text-teal" to="https://fireeye.market/apps/211364">Redline Download</Link>
    </div>

    <h1 class="text-lg">Network Findings</h1>

    <p class="p-5">
      Brim 
      RITA 
      Suricata 
    </p>
    <h1 class="text-lg">Forensic Findings</h1>
    <p class="p-5">
      Processes 
      Running Processes
      listening connections, open ports, services
      ProcessHacker 
      State of Windows Defender, Windows Firewall, Scheduled Tasks
    </p>
    <p class="m-auto p-5">
      Unfortunately, this type of story is all too common and is nothing to laugh at since people have lost their life savings from such scams. In this case, my friend's parents were able to lock down their accounts before anything could be stolen from them.
    </p>
    <p class="p-5">
      Here are some tips to be safer online and help you avoid the situation where hackers get your credit card information. First, don't be afraid of strange popups while you are using a browser like Google Chrome or Firefox. Many malicious websites want you to think you've been compromised by showing popups that say you have malware on your computer. More than likely, you have not been compromised yet but they want you to download a virus to “fix it”. Back in the day, malware used to be able to take advantage of vulnerabilities in browsers using malware called Exploit Kits. As software has gotten more secure over time (and Flash has been widely discontinued for being a major security liability), these have grown increasingly rare. The big thing to watch out for is downloads. Many times, those popups that tell you to click them will download a malicious file. Even at this stage, you have not yet been compromised and although having malware on your computer is super risky, it can't hurt you unless it is executed or run. You can avoid those popups by downloading a browser extension like Ad Block Plus, uBlock Origin, or Ghostery to prevent those from annoying you (they have the added bonus of blocking ads on Youtube and other websites!). Be careful, however, because browser extensions are another common avenue for attackers as many malicious extensions can contain spyware, or software that monitors your activity. Malicious extensions can also greatly increase popups, so be sure that they come from the Chrome browser store.
    </p>
    <img src={Warning} alt="" title="Browser Warning"></img>
    <p class="p-5">
      If your browser shows a message that a file cannot be downloaded securely, you still have the option of downloading it, but you should proceed with caution and only download it if you are sure about the safety of the website.
    </p>
  </div>

</div>
    );
}

export default Incident
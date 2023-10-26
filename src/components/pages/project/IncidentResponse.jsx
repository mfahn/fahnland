import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import Switch from '../../images/computerIR/switch.png';
import Redline from '../../images/computerIR/redline.png';
import Warning from '../../images/computerIR/warning.png';
import Autoruns1 from '../../images/computerIR/Autoruns1.png';
import Autoruns2 from '../../images/computerIR/Autoruns2.png';
import Autoruns3 from '../../images/computerIR/Autoruns3.png';
import Autoruns4 from '../../images/computerIR/Autoruns4.png';
import CCE from '../../images/computerIR/CCE.png';
import Chrome1 from '../../images/computerIR/Chrome1.png';
import Chrome2 from '../../images/computerIR/Chrome2.png';
import Downloads from '../../images/computerIR/Downloads1.png';
import ExecutionPolicy from '../../images/computerIR/ExecutionPolicy.png';
import Firewall1 from '../../images/computerIR/Firewall1.png';
import Firewall2 from '../../images/computerIR/Firewall2.png';
import Firewall3 from '../../images/computerIR/Firewall3.png';
import Firewall4 from '../../images/computerIR/Firewall4.png';
import Firewall5 from '../../images/computerIR/Firewall5.png';
import Firewall6 from '../../images/computerIR/Firewall6.png';
import Firewall7 from '../../images/computerIR/Firewall7.png';
import InitialDate from '../../images/computerIR/InitialDateofCompromise.png';
import NetCon1 from '../../images/computerIR/NetworkConnections1.png';
import NetCon2 from '../../images/computerIR/NetworkConnections2.png';
import PUP from '../../images/computerIR/PUP.png';
import Serv2 from '../../images/computerIR/Service2.png';
import TaskBar from '../../images/computerIR/TaskBarIcons.png';
import TaskMgr from '../../images/computerIR/TaskMgr1.png';
import UV from '../../images/computerIR/UltraViewer.png';
import UVNCLog from '../../images/computerIR/UVNCLog.png';
import Wifi from '../../images/computerIR/WiFi.png';
import WinSec from '../../images/computerIR/WindowsSecurity.png';
import Attackprog from '../../images/computerIR/AttackProg.png';

function Incident() {
    return (
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div className="lg:w-4/5 sm:w-7/8 m-auto">
    <h1 className="text-lg font-bold text-center">Background</h1>
    <div className="p-5 text-dark dark:text-bg-gray">
      My roomate's parents gave me their all-in-one computer that they said is infected with malware. They told me that their bank accounts had been compromised shortly after calling with who they thought was a Microsoft tech support person. After talking with the tech support person, my friend's dad realized something was wrong and hung up. That day, he noticed suspicious transactions and froze all of their accounts. I suspect that they clicked a malicious link, or downloaded malware that spammed popups with the service number. On the phone with the hacker, he might have given access to the hacker with a legitimate remote access application which allowed the hacker to perpetrate the attack. From there, the hacker likely installed malware such as a keylogger to exfiltrate banking credentials that they used to access my friend's parents' bank account. I could easily just wipe the drive and install a new operating system, but that would be no fun, and my friend's parents would never find out what was going on with their computer. I'll need to plan out what I will do to figure out what is going on with this computer in a way that doesn't expose my network to threats and the parents' data to malicious actors.
    </div>
    <h1 className="text-lg font-bold text-center">Gameplan</h1>
    <div className="p-5 text-dark dark:text-bg-gray">
      I will start the investigation at the network layer. Obviously, it is a risk to my friend's parents if I connect it to the internet right away. The initial plan was to set up a network with Inetsim on a virtual machine to answer DNS and file requests to get a feel for what the infected computer is requesting. I looked into a number of solutions like setting up a VMware network to get the virtual and physical computers to communicate. Brian Carr has two really solid tutorials for setting up a virtual environment with Inetsim for monitoring traffic. The major benefit of this tool is that it captures all request at the network layer that happen before an analyst can set up a client solution like Wireshark to capture traffic.
      <div>
      <Link className="hover:text-lowTeal text-lowTeal dark:text-lowTeal dark:hover:text-teal" to="https://www.briancarr.org/post/adventures-with-inetsim">Inetsim Tutorial</Link>
      </div>
      <div>
        <Link className="hover:text-lowTeal text-lowTeal dark:text-lowTeal dark:hover:text-teal" to="https://www.briancarr.org/post/creating-a-virtual-network">VMWare Network Tutorial</Link>
      </div>
    </div>

    <div className="p-5 text-dark dark:text-bg-gray">
      Unfortunately, I could not get my Remnux vm to communicate with the physical computer after many hours of troubleshooting. My next idea was to set up my physical Cisco 3750 switch with a VLAN for the two machines. The Remnux with Inetsim could be Bridged directly into the switch and the infected computer obviously has an ethernet port. The Remnux's IP would be the DNS server so any requests from the infected machine would be forewarded to Inetsim. Like many of the other ideas I had, this fell flat as my efforts to configure the switch (which I bought from my college when they upgraded hardware) was not the primary server for the previous VLAN database. Cisco switches have a neat feature that allows one switch to serve out configurations to other Cisco switches on a network so a network engineer does not have to manually console or SSH into each one to configure them. Despite being almost 20 years old and having been flashed at least twice, the switch managed to still contain the original configuration.
    </div>
    <div className="p-5 text-dark dark:text-bg-gray">
      I imagine the problem and solution are glaringly obvious, but they are eluding me right now. The problem revolves around getting the switch into VTP Server mode even though it already says it is in the correct mode. 
    </div>
    <img className="m-auto text-center" src={Switch} alt="" title="Switch Config"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      At this point, I had been troubleshooting things all day and wanted to get my hands dirty with some actual evidence instead of making the perfect setup for this project but not actually doing any investigating. I had also reached the edge of my admittedly slim knowledge of Cisco switches. 
    </div>

    <div className="p-5 text-dark dark:text-bg-gray">
      If I had more time, I would have plugged the infected computer directly into one of my server's four ethernet NICs and configured Proxmox to network that directly into my reverse-engineering lab where I have another Remnux VM. In hindsight, that would have been the easiest path, but unfortunately hindsight is 20/20 and I just wanted to get the project off my plate.
    </div>

    <div className="p-5 text-dark dark:text-bg-gray">
      Now, my idea is to transfer a Wireshark installation binary and some other investigative tools onto the infected computer and run a Redline investigation to be analyzed later. The game plan is to acquire a Redline image and a simultaneous Wireshark capture to run through my SELKS stack, which is a network security toolset, and RITA, which detects Command and Control (C2) beacons. It would be really cool to take a forensic image of the disk, but I do not have the equipment to do that. The Redline tool will collect a memory capture that will include processes, open ports, active connections, services, etc. It is a super valuable tool, and frankly, I am surprised that it is free (not that I am complaining).
    </div>

    <img className="text-center" src={Redline} alt="" title="Redline"></img>
    <div>
      <Link className="dark:text-lowTeal text-lowTeal text-center dark:hover:text-teal" to="https://fireeye.market/apps/211364">Redline Download</Link>
    </div>

    <div className="p-5 text-dark dark:text-bg-gray">
      Now, my idea is to transfer a Wireshark installation binary and some other investigative tools onto the infected computer and run a Redline investigation to be analyzed later. The game plan is to acquire a Redline image and a simultaneous Wireshark capture to run through my SELKS stack, which is a network security toolset, and RITA, which detects Command and Control (C2) beacons. It would be really cool to take a forensic image of the disk, but I do not have the equipment to do that. The Redline tool will collect a memory capture that will include processes, open ports, active connections, services, etc. It is a super valuable tool, and frankly, I am surprised that it is free (not that I am complaining).
    </div>

    <div className="text-lg font-bold text-center text-dark dark:text-bg-gray">Incident Reconstruction</div>
    <div className="p-5 text-dark dark:text-bg-gray">
      We have a few important things going for us: first, we know that the computer was not accessed or run after the intrusion. Therefore, in the timeline, we will know the day of the first activity is the date immediately before the day I started it and ran tools. We can then narrow our search in the logs to that period of time first. Once we find some artifacts of value, we can look at later logs for similar activity.
    </div>
    <img className='text-center' src={InitialDate} alt="" title="Initial Date of Compromise"></img>

    <div className="p-5 text-dark dark:text-bg-gray">
      Unfortunately, the Redline logs show that the computer was started 8 times after the start of the incident, so the previous idea to narrow the search based on that date will no longer work. For purposes of this investigation, we are assuming no timestomping has been done, especially because we do not have a forensic image of the computer that would contain the actual Windows logs not accessible to a tool that runs ontop of the OS. How do I know the date of the incident and that it was started approximately 8 times after? Well, I sort of cheated while I was waiting for the Redline Scan to finish by poking around the computer and made some interesting findings.
    </div>

    <div className="p-5 text-dark dark:text-bg-gray">
      First, I noticed a familiar icon on the Desketop that the average user does not (and should not) have installed.
    </div>
    <img className='text-center' src={UV} alt="" title="UltraViewer"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      This made me wonder what other software has been downloaded recently that seems out of place.
    </div>
    <img className='text-center' src={TaskBar} alt="" title="Taskbar"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      The taskbar had a couple of interesting icons, a MacAfe Antivirus icon, and Webroot Antivirus. Clearly this person wanted to be secure. I wondered what Windows Security thought of these duplicate programs, so I ventured to the aforementioned application to see which was active and if it was configured properly.
      </div>
      <img className='text-center' src={WinSec} alt="" title="Windows Security"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      Oh thank goodness, Webroot SecureAnywhere is protecting us! I had to do a quick search to see if it was a real antivirus, and sure enough, it does exist and is in fact an antivirus.
    </div>
    
    <div className="p-5 text-dark dark:text-bg-gray">
      I wondered if these tools were recent additions or if they had been with the user for the long haul. I meandered to the Downloads folder, and made some more discoveries.
    </div>
    <img className='text-center' src={Downloads} alt="" title="Downloads"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      It appeared that software was repeatedly downloaded, which indicates that the user of the computer went out of their skill level to install this software, perhaps because someone was directing them to. Regardless, I now have reason to check out the history of the user to see where they got Ultra Viewer, it could be a cracked and malicious version, or simply malware disguised as a remote access tool.
    </div>

    <img className='text-center' src={Chrome2} alt="" title="Search History 2"></img>
    <img className='text-center' src={Chrome1} alt="" title="Search History 1"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      With this web history, we can now reasonably recreate the attack chain of the event and escalate it to a security incident. It begins with an attempt to get free TV, maybe to watch a show or see what's on. <div className='italic font-bold inline uppercase'>do not visit any of these malicious sites without taking precautions as they could cause damage to your computer.</div> That said, it appears that the IP address belongs to a new and legitimate website. A popup must have tricked the user to click on it, which took him to a malicious site masquerading as a tech support/security site. This either redirected or socially engineered him to download UltraViewer. At some point, he either clicked a link to connect a malicious person to his computer or called a phone number where someone instructed him on how to give them remote access. Eventually, I am guessing that the attackers asked or ransomed some form of payment from my friend's parents, a fee that would be in Bitcoin or some other crypto currency. IYDN, Bitcoin is highly traceable, and there are some fascinating articles on Wired Magazine about catching <Link className='text-lowTeal underline hover:text-midTeal' to="https://www.wired.com/story/alphabay-series-part-1-the-shadow/">dark web market operators</Link> and <Link className='text-lowTeal underline hover:text-midTeal' to="https://www.wired.com/story/tracers-in-the-dark-welcome-to-video-crypto-anonymity-myth/">child pornographers</Link> by mapping Bitcoin transactions. Back to the incident, the user had to set up an account on Coinbase, a cryptocurrency trading platform, to buy some cryptocurrency. It is not clear from this browser history whether there was any purchase or exchange between the user and attacker.
    </div>
    <img className='text-center' src={UVNCLog} alt="" title="UltraViewer Log"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      Observing the UltraViewer connection log, it appears that two connections were made from different systems a few hours apart.
    </div>

    <img className='text-center' src={Firewall5} alt="" title="Firewall5"></img>
    <img className='text-center' src={Firewall3} alt="" title="Firewall3"></img>
    <img className='text-center' src={Firewall2} alt="" title="Firewall2"></img>
    <img className='text-center' src={Firewall1} alt="" title="Firewall1"></img>
    <img className='text-center' src={Firewall4} alt="" title="Firewall4"></img>
    <img className='text-center' src={Firewall6} alt="" title="Firewall6"></img>
    <img className='text-center' src={Firewall7} alt="" title="Fierwall7"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      I looked at the Windows Firewall and noticed a number of suspicious rules that allowed all manner of traffic into the computer. Some were remote access rules (which do not belong there on a computer that, as far as I can tell was never intended to be remotely used until now). Some seemed to be associated with the Windows Search bar (yes, I know that it has been integrated with Bing for some reason, so it is possible that those are legit). There are also a number of rules created for the SYSTEM and Administrator users, which are quite interesting. A particular string of largely meaningless characters appears a number of times as well which some blogs claim is related to Microsoft Cortana, which I occasionally remember is a exists: cw5n1h2txyewy. Having a memory snapshot of the computer would have been awesome to check the legitimacy of this file as malware frequently pretends to be 
    </div>

    <img className='text-center' src={Serv2} alt="" title="Services2"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      I powered on the computer and ran Redline and Wireshark. I figured that the attackers already had ample opportunities to exfiltrate files/data from the computer, so my connecting it to the internet would not expose them any more than they already exposed themselves. Interestingly, the clipboard and capture service are acive despite no use of the Windows Snipping tool or any intentional screen capture by me.
    </div>

    <img className='text-center' src={Wifi} alt="" title="WiFi Networks"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      This finding perplexed me: I know for a fact that this computer never connected to my house's WiFi networks, but it appears that through some Windows magic, it synced all the networks my friend's phone has connected to, and it allowed the computer to connect to the internet right away. Yikes! It would be interesting to do a deep dive into how and why that works behind the curtain, because it makes me wonder what else phones and Windows computers are sharing with one another.
    </div>

    <img className='text-center' src={PUP} alt="" title="PUPs"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      This is a good setting to keep on. I am not sure if Windows ships with it enabled by default or if it was disabled maliciously.
    </div>
    <img className='text-center' src={NetCon1} alt="" title="Network Connections1"></img>
    <img className='text-center' src={NetCon2} alt="" title="Network Connections3"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      Fi
    </div>

    <img className='text-center' src={ExecutionPolicy} alt="" title="Execution Policy"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      I was curious to see if PowerShell was used in this incident, so I checked the Execution Policy and found it unchanged, or if it was changed, the attacker went to the effort of setting it back to default settings afterward. I find this possibility inconsistent with the other clues in the incident, such as using blatent remote access software instead of using a custom malicious option.
    </div>

    <img className='text-center' src={TaskMgr} alt="" title="Task Manager"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      Speaking of remote access software, it appears UltraViewer starts on boot. This could allow an attacker to remotely access the computer. The attacker seems to have forgotten about this ability, since they did not connect to it after the day of the incident. This makes me think that the purpose of the attack was not prolonged access, but rather social engineering.
    </div>

    <img className='text-center' src={Autoruns1} alt="" title="Autoruns1"></img>
    <img className='text-center' src={Autoruns2} alt="" title="Autoruns2"></img>
    <img className='text-center' src={Autoruns3} alt="" title="Autoruns3"></img>
    <img className='text-center' src={Autoruns4} alt="" title="Autoruns4"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      The Autoruns tool bundled with Comodo Cleaning Essentials does a great job at listing in a friendly tree format the various processes that are supposed to automatically run from the registry. I will check this list of "Unknown" registry entries in Redline. During this "investigation", I learned that FilenameModifications are different than FilenameChanges, with the former referring to the change in the filename or extension itself and the second describing to the changing of the metadata in a file.
    </div>

    <img className='text-center' src={CCE} alt="" title="Comodo Cleaning Essentials"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      Comodo Cleaning Essentials found a single piece of malware in the form of a malicious registry entry. It categorizes the registry as a rootkit. We will check that entry against the Redline findings to see if there is related activity. Unfortunately, that registry key was nowhere to be found in the Redline extraction.
    </div>

    <div className="text-lg font-bold text-center">Redline Findings</div>
    <div className="p-5 text-dark dark:text-bg-gray">
      It took a lot of narrowing down in Redline. There were over 4 million events that the tool collected from the computer only during the day of the incident, to say nothing of the time before and after. I searched for the registry keys referenced in Autoruns and Comodo Cleaner, but I could not find them. It is possible that I was not searching correctly, but it also seemed that I could not list multiple search criteria, even when using regex. The Redline browser data itself seemed pretty benign, email, checking payslips from work, YouTube, checking the Lottery, until a wetransfer link that downloaded a zip file caught my attention. Attackers love to serve malware on anonymous fileshare platforms like Wetransfer. That link was intermixed with banking sessions, but it is hard to tell from the surrounding searches and data if it is malicious or benign. It appears he spent some time looking in his junk mail folder, perhaps for a login code. After extracting the files from the wetransfer link, it is most certainly benign. It was also downloaded before the VNC software was downloaded, which I believe to be the first sign of trouble. 
    </div>
    <div className="p-5 text-dark dark:text-bg-gray">
      As a total aside, Redline, and more specifically browsers, collected detailed information about users, including every form you have ever entered. In the Redline data, I saw names, phone numbers, addresses, hashed passwords, and URLs to pair that data to.
    </div>

    <img className='text-center' src={Attackprog} alt="" title="Attack Progression"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      This image clearly shows the attack progression. Note that (as of now) the IP address does not contain malicious links, popups, or malware anymore, but I would not recommend visiting that site unless precautions are taken.
    </div>

    <div>
      <Link className="dark:text-lowTeal text-lowTeal text-center dark:hover:text-teal" to="https://www.sans.org/tools/get-zimmermantools/">Zimmerman Tools Download Script</Link>
    </div>
    <div>
      Zimmerman Tools is a collection of forensic tools that incident responders might find helful for figuring out how a compromise happened. If you are interested in doing a project like this, this toolset is a solid starting point.
    </div>

    <div className="text-lg font-bold text-center">Network Findings</div>
 
    <div className="p-5 text-dark dark:text-bg-gray">
      RITA 
      Suricata
      Scheduled Tasks
    </div>
    <h1 className="text-lg font-bold text-center">Post Script</h1>
    <div className="p-5 text-dark dark:text-bg-gray">
      Unfortunately, this type of story is all too common and is nothing to laugh at since people have lost their life savings from such scams. In this case, my friend's parents were able to lock down their accounts before anything could be stolen from them.
    </div>
    <div className="p-5 text-dark dark:text-bg-gray">
      Here are some tips to be safer online and help you avoid the situation where hackers get your financial information. First, don't be afraid of strange popups while you are using a browser like Chrome or Firefox. Many malicious websites want you to think you've been compromised by showing popups that say you have malware on your computer. More than likely, you have not been compromised yet but they want you to download a virus to “fix it”. Back in the day, malware used to be able to take advantage of vulnerabilities in browsers using malware called Exploit Kits. As internet browsers have gotten more secure over time (and Flash has been widely discontinued for being a major security liability), these have grown increasingly rare. Therefore, hackers need you to download and run a file or connect to your computer to copmromise you. The big thing to watch out for is downloads. Many times, those popups that tell you to click them will download a malicious file. Even at this stage, you have not yet been compromised and although having malware on your computer is super risky, it can't hurt you unless it is executed or run. You can avoid those popups by downloading a browser extension like Ad Block Plus, uBlock Origin, or Ghostery to prevent those from annoying you (they have the added bonus of blocking ads on Youtube and other websites!). Be careful, however, because browser extensions are another common avenue for attackers as many malicious extensions can contain spyware, or software that monitors your website activity. Malicious extensions can also spam you with malicious popups, so be sure that they come from a reputable source like the Chrome store.
    </div>
    <img className="text-center m-auto" src={Warning} alt="" title="Browser Warning"></img>
    <div className="p-5 text-dark dark:text-bg-gray">
      If your browser shows a message that a file cannot be downloaded securely, you still have the option of downloading it, but you should proceed with caution and only download it if you are sure about the safety of the website.
    </div>
  </div>

</div>
    );
}

export default Incident;
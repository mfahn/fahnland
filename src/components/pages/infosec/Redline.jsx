import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import activeConnection from '../../images/incident-response/activeConnections.png';
import droppedFiles from '../../images/incident-response/droppedFiles.png';
import scheduledTasks from '../../images/incident-response/scheduledTasks.png';
import registryKeys from '../../images/incident-response/registryKeys.png';
import taskManager from '../../images/incident-response/taskManager.png';
import trigger from '../../images/incident-response/trigger.png';
import samples from '../../images/incident-response/samples.png';

function Redline() {
    return (
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div className="lg:w-4/5 sm:w-7/8 m-auto">

  <h1 className="text-2xl font-bold text-center">Redline Investigation</h1>
  <p className="text-sm text-center text-dark dark:text-bg-gray p-5">
      Michael Fahnlander 3/22/23
    </p>

  <h1 className="text-lg font-bold text-center">Executive Summary</h1>
<p className="text-base text-dark dark:text-bg-gray">
  Redline is a powerful tool used by incident responders to capture and extract granular details from a compromised system to process later. The various datatypes it collects from a computer can greatly aid an investigation to reverse engineer how the attack occurred. In this paper, I explore an attack scenario and highlight the most important features of the tool and surprises and takeaways from using it.
</p>

  <h1 className="text-lg font-bold text-center">Environment</h1>

<p className="text-base text-dark dark:text-bg-gray">
  When the Redline tool executes, it performs a battery of tasks to search for malicious behavior, including recursively searching the filesystem for files to scan for malicious attributes, collecting registry artifacts, capturing memory, listing services and running processes, and indexing APIs. I used this lab as an opportunity to experiment with live malware samples to discover the Indicators of Compromise that I might encounter in a live incident response engagement. Instead of running the tool on my local system, I installed Redline on a virtual machine on my Proxmox server that I used previously for other classNamees, including reverse engineering. It was never used for any sensitive tasks but had enough other activity to simulate a real computer. The virtual machine was logically separated from other virtual machines and devices with a Virtual Local Area Network on a firewall. It was given network access.
</p> 
 
  <h1 className="text-lg font-bold text-center">Methodology</h1>
<p className="text-base text-dark dark:text-bg-gray">
  Two live malware samples were downloaded from Malware Bazaar, a website which collects various samples of malware for research. It includes many links to sandboxes where the malware has been detonated and studied. These online sandboxes gave no indication of Denial of Service, meaning their execution would not affect other computers. A malicious VBA script and an executable were the delivery methods to provide a realistic attack scenario of an employee who downloaded a Microsoft Office document or an executable. Sample 1 was chosen because it does not implement evasion techniques to determine if it is in a virtual machine. The second does implement some checks, but they are more to thwart dynamic analysis as opposed to only checking for a virtual environment. The latter sample contained many more malicious behaviors than the first which would result in more indicators in Redline. Both were executed and allowed to run for a few minutes before Redline was executed.
</p>

<img src={samples} alt="" title="Samples"></img>

<h1 className="text-md font-bold text-center">Sample 1</h1>
<Link to='https://bazaar.abuse.ch/sample/09207e35149beabaafe1bd21b25cea2d19d92f96b06472d07c9f165149778625/ '>Sample 1</Link>
<p className="text-base text-dark dark:text-bg-gray">
  MD5: 7be2514ea904cfe2894f5dbba4b3811a
</p>
<p className="text-base text-dark dark:text-bg-gray">
  No evasion behavior detected by Joe Sandbox
</p>

<h1 className="text-md font-bold text-center">Sample 2</h1>
<Link to='https://bazaar.abuse.ch/sample/8a2baea019bf241e2808da9cef1595f50bb33c2ac4de23f74e0612bb96a6c251/ '>Sample 2</Link>
<p className="text-base text-dark dark:text-bg-gray">
MD5: cc0f7456722f7042f1a061ada45452b1	
</p>
<p className="text-base text-dark dark:text-bg-gray">
Evasion behavior detected by Joe Sandbox
</p>

<p className="text-base text-dark dark:text-bg-gray">
  The top sample, Sample 1, is a malicious VBA script that might be embedded in a malicious Microsoft Office document. It would be executed once a user clicks “Enable Content” in the document. Sample 2 is an executable, but it has an icon resembling a PDF to make it more appealing to execute as a user might mistake it for a document.
</p>
<img src={taskManager} alt="" title="Task Manager"></img>

<p className="text-base text-dark dark:text-bg-gray">
  After detonating the malware, Figure 1 shows that CPU usage spiked with suspicious PowerShell and Command Line processes indicating that, to at least some degree, the malware had activated. Using the sandbox behaviors as a guide, I found that both samples effectively detonated.
</p>

<h1 className="text-lg font-bold text-center">Network Findings</h1>
<img src={droppedFiles} alt="" title="New Files"></img>

<p className="text-base text-dark dark:text-bg-gray">
  The Browser URL History tab in Redline showed no malicious entries which surprised me because malware sometimes navigates to invisible windows to download payloads. However, the DNS Entries section in Redline showed two malicious domains to which the compromised machine reached out. The malware must have utilized command line tools to reach out to the attacker infrastructure instead of starting a headless browser which might leave a trail.
</p>
<img src={activeConnection} alt="" title="Active Connections"></img>

<p className="text-base text-center text-dark dark:text-bg-gray">
Cs9.wpc.v0cdn.net
</p>
<p className="text-base text-center text-dark dark:text-bg-gray">
Cs22.wpc.v0cdn.net
</p>

<p className="text-base text-dark dark:text-bg-gray">
  The machine reached out to a number of sites over the course of the Redline execution, but not nearly as many as I would have guessed. Interestingly, VirusTotal did not detect any of the sites as malicious, but many community users of VirusTotal identified the sites as malicious. Some users identified the malware campaign and samples that I downloaded like Sample 2 downloading the Agent Tesla malware as its second stage.
</p>

<h1 className="text-lg font-bold text-center">Host Findings</h1>

<p className="text-base text-dark dark:text-bg-gray">
  Redline failed to identify the files that the second strain of malware downloaded. This surprised me because I would have thought it would detect the presence of a new file. It must only monitor browser downloads which would explain why it did not detect the dropped executable.
</p>
 
<p className="text-base text-dark dark:text-bg-gray">
  The machine contains two processes for svchost.exe that are actively connected to an IP address over an HTTPS port. The IP addresses, like the domains before, are not identified by VirusTotal as being malicious, but they are marked by community users as malicious. They even listed IoCs/malware families that match the malware types I downloaded.
</p>
<img src={registryKeys} alt="" title="Cool Spot"></img>

<p className="text-base text-dark dark:text-bg-gray">
  During the investigation, I quickly realized how difficult finding malicious Registry entries would be using a manual analysis. Windows makes heavy use of the registry system to control automatic tasks, and is a common target of malicious actors. In total, Redline collected 1.5 million registry events during its execution. This presented a massive challenge as a human would not likely be able to sift through the figurative haystack to find the needle. This might be a weakness of Redline as it does not have a way of intelligently discerning registry events. From my experience with the tool, it seems that the best way to identify malicious Registry changes is from their creation. Once a malicious process is identified, that information, as well as parent process information can be used to search for common denominators. Of course, this method is also dependent on capturing the malware in the act of creating a registry change.
</p>
<img src={scheduledTasks} alt="" title="Cool Spot"></img>

<p className="text-base text-dark dark:text-bg-gray">
  By knowing the exact behaviors to look for, I was able to narrow down my search of IoCs since I knew the malware would make scheduled tasks. Redline has the ability to exclude or exclusively search for specific parameters. This drastically reduces the time required to identify malicious behavior because known benign processes or registries can be eliminated from the results. I used these techniques to narrow down Scheduled Tasks as Redline found over two hundred. Redline provides an intuitive view akin to the native view in Windows, giving an analyst the ability to view all the attributes of a Scheduled Tasks in Windows' native tool.
</p>
<img src={trigger} alt="" title="Cool Spot"></img>

<h1 className="text-lg font-bold text-center">Related Tools</h1>

<p className="text-base text-dark dark:text-bg-gray">
  I installed a packet capture analysis tool called Brim (which is undergoing a name change to Zui) to analyze the traffic captures for taken at random intervals of the execution. It provides an intuitive and searchable GUI to search for different protocols. I found many more domains by analyzing those packet captures than the DNS entries Redline found. I wonder if this is due to domains bouncing traffic around between the attacker's infrastructure and the victim before returning results via a different server than the one that accepted the initial beacon from the compromised system. That would explain the packet captures having more entries than the DNS on the virtual machine since the victim would not be explicitly requesting the record.
</p>

<h1 className="text-lg font-bold text-center">Takeaways</h1>

<p className="text-base text-dark dark:text-bg-gray">
  I was surprised by several aspects of Redline that I did not expect given my experience with other tools. In the security tool space, I have been spoiled by products and tools like Splunk or Wazuh. Such tools have their own intuitive scripting languages or use Elastic Stack to simplify the process of narrowing down large datasets to the pure  drastically drill down into specific behaviors like connections and processes.
</p>	
<p className="text-base text-dark dark:text-bg-gray">
  Redline's extensive use of hashes for different essential files and services definitely helps incident responders know good and find evil, as the old phrase says. Sophisticated attackers will sometimes replace essential files like lsass.exe, explorer.exe, crss.exe, and others with compromised versions of their own. This elaborate persistence method helps attackers stay hidden as a defender might simply gloss over such executables since they are omnipresent on Windows computers. Redline, however, compares the hashes of those essential files to the official versions released by Microsoft. A column is dedicated to stating whether a hash is verified. While this does not guarantee that an attacker or malicious process could still misuse a legitimate version of the executable, Redline greatly simplifies the finding of evil by processing this step for an analyst [1]. If I had more time, I would have sought out a malware variant that replaces such files to observe if and how Redline differentiates the legitimate programs from the malicious ones.
</p>

<h1 className="text-lg font-bold text-center">Conclusion</h1>
<p className="text-base text-dark dark:text-bg-gray">
  Having tested Redline for myself in a simulated but realistic investigation, I can safely say that it will have a spot on my lineup of tools if I ever encounter incident response scenarios in the future. It's diverse functionality could help an analyst collect a variety of different log types that can indicate evidence of an attack. It provides ways to narrow rich information to reduce background noise that an analyst might encounter, although not as flexible as other tool scripting implementations. Nonetheless, it is a comprehensive tool that carries out valuable functions for incident response.
</p>

  <h1 className="text-lg font-bold text-center">References</h1>
  <p className="text-base text-dark dark:text-bg-gray">
    [1] 	G. Johansen, Digital Forensics and Incident Response, 2 ed., Birmingham, UK: Packt Publishing, 2020. 
  </p>
  </div>
</div>
    );
}

export default Redline;
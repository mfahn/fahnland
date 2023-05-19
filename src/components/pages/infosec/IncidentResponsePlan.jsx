import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import { Line } from 'react-chartjs-2';

function IncidentResponsePlan() {
    return (
<div class="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div class="lg:w-4/5 sm:w-7/8 m-auto">
      
    <p class="text-base text-dark dark:text-bg-gray">
      I wrote this Ransomware Incident Response Plan for a graduate Incident Response class at Dakota State University. Full disclosure, ChatGPT was permitted for this assignment, and I used it for some of the sections of this plan.
    </p>

    <h1 class="text-lg font-bold text-center">Introduction</h1>
    <p class="text-base text-dark dark:text-bg-gray">
      This section provides an overview of the purpose and scope of the incident response plan, as well as any relevant legal or regulatory agencies with which the organization must comply. The mission statement inspires confidence by stating in broad terms the goals for the incident response plan for the organization.
    </p>

    <h1 class="text-lg font-bold text-center">Purpose</h1>
    <p class="text-base text-dark dark:text-bg-gray">
      The purpose of this incident response plan is to ensure the prompt detection, containment, analysis, and resolution of security incidents that may impact our organization's information systems, data, and reputation. This plan covers all types of security incidents, including but not limited to unauthorized access, malware infections, denial-of-service attacks, and data breaches. The objectives of this plan are to minimize the impact of security incidents on our organization, protect critical data and systems, and restore normal operations as quickly as possible. This plan involves a range of stakeholders, including IT staff, legal teams, public relations staff, and external vendors. The expected outcomes of this plan are to prevent or limit damage to our organization's reputation, reduce the likelihood of future incidents, and ensure compliance with relevant regulations and industry standards.
    </p>

    <h1 class="text-lg font-bold text-center">Mission Statement</h1>
    <p class="text-base text-dark dark:text-bg-gray">
      Our mission is to minimize the impact of incidents on company by swiftly and effectively responding to them. We will prioritize the safety and well-being of our employees and customers, and work to restore our systems and operations to normal as quickly as possible. We will communicate transparently and effectively with all stakeholders throughout the incident response process, and continually learn to improve our incident response capabilities [1].
    </p>

<h1 class="text-lg font-bold text-center">Relevant Compliance Authorities</h1>

Policy/Standard/Law	Compliance PoC	Contact Information
		
		

  <h1 class="text-lg font-bold text-center">Key Definitions</h1>
  <p class="text-base text-dark dark:text-bg-gray">
    Event: A security event is any occurrence that may indicate that an organization's information systems, assets, or data have been compromised or may be vulnerable to a threat.
    </p>
    <p class="text-base text-dark dark:text-bg-gray">
    Incident:   An occurrence that actually or potentially jeopardizes the confidentiality, integrity, or availability of an information system or the information the system processes, stores, or transmits or that constitutes a violation or imminent threat of violation of security policies, security procedures, or acceptable use policies [2].
    </p>
    <p class="text-base text-dark dark:text-bg-gray">
    Breach: Attackers were successful in causing harm to organization by compromising the confidentiality, integrity, or availability of information or systems.
    </p>
    <p class="text-base text-dark dark:text-bg-gray">
    Severity: How much a breach effects company. Reference Incident Identification Section for quality-based classification of a breach. Compliance obligations plays a role in determining the categories of data with special requirements for each one, for example Protected Health Information with HIPAA or financial information with the Graham-Leach Bliley Act.
  </p>

<h1 class="text-lg font-bold text-center">Data Classification System</h1>

Classification	Description
Public	This type of data is intended for public consumption and can be freely shared. It includes marketing materials, press releases, and other information that is not sensitive or confidential.
Internal	This type of data is intended for internal use only and should not be shared outside of company. It includes data related to company operations, such as strategic plans, sales figures, and employee performance reviews.
Confidential	This type of data is highly sensitive and should be kept strictly confidential. It includes personally identifiable information (PII), financial data, trade secrets, and any other data that, if leaked or compromised, could result in significant harm to the company or its stakeholders.

  <h1 class="text-lg font-bold text-center">Incident Response Team</h1>
  <p class="text-base text-dark dark:text-bg-gray">
    This section identifies the members of the incident response team, their roles and responsibilities, and their contact information.
  </p>
  <h1 class="text-lg font-bold text-center">Incident Response Team Members</h1>

Title	Name	Phone Number	Email


<h1 class="text-lg font-bold text-center">Law Enforcement Contacts</h1>
		
Agency	Name	Phone Number	Email

  <h1 class="text-lg font-bold text-center">Incident Identification</h1>
  <p class="text-base text-dark dark:text-bg-gray">
    This section describes the process for identifying potential incidents, including who should be notified and how. The security event should be escalated based on severity criteria in the Data Impact chart below. Common attack vectors are listed and overviewed. This is not an exhaustive list.
  </p>
<h1 class="text-lg font-bold text-center">Common Incident Types</h1>

Reconnaissance	Reconnaissance might include brute-forcing passwords, sending malformed packets to webservers, or attempting SQL Injection against database queries.
Phishing Attack	Phishing attacks involve tricking users into revealing their personal information, such as login credentials, credit card numbers, or other sensitive information, by posing as a legitimate organization or person.
Malware Infections	Malware is a type of malicious software that can harm or disrupt computer systems. Malware infections can result in loss of data, theft of sensitive information, or other forms of damage.
Ransomware	Ransomware is a type of malware that encrypts files on a victim's computer and demands payment in exchange for the decryption key. Ransomware attacks can be very damaging and can result in significant financial losses.
Distributed Denial-of-Service (DDoS)	DDoS attacks involve overwhelming a targeted server or network with traffic to disrupt or shut down its services. These attacks can be used for various purposes, including extortion, revenge, or political activism.
Insider Threats	Insider threats involve employees or other insiders who use their access to a system to steal data or damage the organization in some way. This can be intentional or unintentional.
Social Engineering	Social engineering attacks involve using psychological manipulation to trick users into giving up sensitive information or performing actions that are harmful to the organization.
Unauthorized Access	Unauthorized access involves individuals or groups gaining access to a system or network without proper authorization. This can result in data theft, destruction, or other forms of damage.
Advanced persistent threats (APTs)	APTs are sophisticated attacks that involve targeted, long-term efforts to gain access to a system or network. These attacks can be difficult to detect and can result in significant damage to the organization.
Common Incident Types [3], [4].

<h1 class="text-lg font-bold text-center">Impact on Data/Systems</h1>

	Low	Medium	High
Confidentiality
The unauthorized disclosure of information/data will have a:	Limited adverse effect on company operations, assets, or systems	Serious adverse effect on company operations, assets, or systems	Severe or catastrophic adverse effect on company operations, assets, or systems
Integrity
The unauthorized modification or destruction of data or systems could have a:	Limited adverse effect on company operations, assets, or systems	Serious adverse effect on company operations, assets, or systems	Severe or catastrophic adverse effect on company operations, assets, or systems
Availability
The disruption of access to or use of data/systems could have a:	Limited adverse effect on company operations, assets, or systems	Serious adverse effect on company operations, assets, or systems	Severe or catastrophic adverse effect on company operations, assets, or systems
Data/System Impact Chart [5], [6].

<h1 class="text-lg font-bold text-center">Company Organizational Chart</h1>

  <p class="text-base text-dark dark:text-bg-gray">
    The company chart reflects the organizational hierarchy for reporting and escalation purposes. Due diligence must be used to verify potential Indicators of Compromise (IoCs) to allow a security event to be escalated to a security incident or a security incident to be escalated to a security breach. The definitions in the Introduction may be used to clarify the differences between different occurrences.
  </p>

  <h1 class="text-lg font-bold text-center">Incident Containment</h1>
  <p class="text-base text-dark dark:text-bg-gray">
    The steps outlined below detail how to prevent further damage or loss by implementing specific procedures for isolating and containing incidents. The response attempts to limit the scope of the incident to as few devices as possible. It also takes into account Service Level Agreements (SLAs) and other business responsibilities to other organizations. Communication and coordination with internal and external stakeholders should take place as specified in the Communicating and Reporting section. Standard procedures for shutting down or disconnecting systems should be established while also accounting for the system's role in business functions and other dependencies. Such systems require special treatment and may only be taken offline as a last resort.
  </p>

<h1 class="text-lg font-bold text-center">Standard Isolation Procedure</h1>
<ol class="text-base text-dark dark:text-bg-gray">
  <li>Disconnect the affected system from the network: The first step is to disconnect the affected system from the network to prevent the attacker from accessing the system and the network. Network data can be collected by an IDS or firewall. Disconnecting the device from the network serves to minimize communications with the attackers.</li>
  <li>Collect Memory Image from the system: Having a snapshot of the device allows analysts to investigate the malware or suspicious behavior</li>
  <li>Shut down the affected system: The next step is to shut down the affected system to prevent any further damage to the system or the network.</li>
  <li>Preserve the evidence: It is important to preserve the evidence related to the cyber-attack. This includes logging all relevant information, such as system logs, network traffic logs, and other forensic data.</li>
  <li>Assess the damage: Once the system is isolated and the evidence is preserved, the next step is to assess the damage. This involves analyzing the system to determine the extent of the damage caused by the cyber-attack.</li>
  <li>Remediate the issue: The next step is to remediate the issue. This may involve restoring the system from a backup, applying security patches, or implementing other security measures to prevent similar attacks in the future.</li>
  <li>Monitor the system: After remediation, the system should be monitored closely to ensure that the issue has been fully resolved and to detect any further attempts by the attacker to gain access to the system or the network.</li>
</ol>

Department	Systems	Special Handling Requirements
		
  <h1 class="text-lg font-bold text-center">Evidence Preservation</h1>
  <p class="text-base text-dark dark:text-bg-gray">
    This section establishes the procedures for collecting and preserving evidence related to the incident. The procedures must create a chain of people who can verify the evidence such that their testimony and the below chart may be accepted in a court of law. While most cyber-attacks occur from outside the network of the organization, insider threats must be accounted for in the Incident Response Plan [7]. The Procedures for collecting, preserving, and analyzing evidence must also secure and protect evidence. A chain of custody fulfills this objective. Physical evidence must be secured in a locked location such that it cannot be easily accessed or tampered with.
  </p>

  <h1 class="text-lg font-bold text-center">Chain of Custody</h1>

Evidence	Date/Time	Location	Collector	Witness
				
				

<h1 class="text-lg font-bold text-center">Physical Evidence Collection</h1>
<ol class="text-base text-dark dark:text-bg-gray">
  <li>If the computer is on, photograph the computer and scene.</li>
  <ul>
    <li>If the computer is off, do not turn it on</li>
  </ul>
  <li>Collect live data - start with RAM image (Live Response locally or remotely via F-Response) and then collect other live data "as required" such as network connection state, logged on users, currently executing processes etc.</li>
  <li>If hard disk encryption detected (using a tool like Zero-View) such as full disk encryption i.e. PGP Disk — collect "logical image" of hard disk using dd.exe, Helix - locally or remotely via F-Response</li>
  <li>Unplug the power cord from the back of the tower - If the computer is a laptop and does not shut down when the cord is removed then remove the battery</li>  
  <li>Diagram and label all cords.</li>
  <li>Document all device model numbers and serial numbers.</li>
  <li>Disconnect all cords and devices.</li>
  <li>Check for HPA then image hard drives using a write blocker, Helix or a hardware imager.</li>
  <li>Package all components (using anti-static evidence bags)</li>
  <li>Seize all additional storage media (create respective images and place original devices in anti-static evidence bags)</li>
  <li>Keep all media away from magnets, radio transmitters and other potentially damaging elements</li>
  <li>Collect instruction manuals, documentation and notes.</li>
  <li>Document all steps used in the seizure.</li>
</ol>
<p class="text-base text-dark dark:text-bg-gray">
  Physical Evidence Collection [8].
</p>

    <h1 class="text-lg font-bold text-center">Incident Analysis</h1>
    <p class="text-base text-dark dark:text-bg-gray">
      This section outlines the process for conduct a thorough analysis of the incident in order to identify the root cause(s), assess the impact, and determine any necessary remediation steps. The response to the incident depends on the results of this analysis. It seeks to establish a scope of the incident analysis, which may include the timeframe of the analysis, the systems or applications involved, and any other relevant factors. It lists of the individuals or teams responsible for conducting the incident analysis, along with their respective roles and responsibilities. This section provides an overview of the methodology to be used in conducting the incident analysis, which may include techniques such as root cause analysis, impact assessment, and lessons learned. The result of this analysis may include logs, system configurations, user accounts, and any other relevant information. The root cause(s) of the incident, which may include identifying any vulnerabilities or weaknesses in the systems or processes involved, as well as any human factors that may have contributed to the incident will be listed. The effect of the incident on the organization, including any damage to systems or data, financial costs, and reputational damage will be calculated.
    </p>

    <h1 class="text-lg font-bold text-center">Incident Responsibilities</h1>

Legend

R - Responsible
A - Accountable
C - Consulted
I - Informed	SOC Team	Incident Analyst	Incident Response Lead	Forensics Analyst	Communication Lead	Board/Leadership
1.0	Incident Start						
1.1	Identify Incident/Notify SOC						
1.2	Involve Cyber Insurance per policy						
2.0	Assign Roles						
2.1	Fill out sheet with contact information						
2.2	Alert employees						
3.0	Response Initiation						
3.1	Analysis						
3.2	Gather Physical Artifacts						
3.3	Categorize						
3.4	Determine Resource Criticality and Impact						
3.5	Identify Compromised Data 						
3.6	Determine Data Sensitivity						
3.7	Determine Priority						
4.0	Confirm Incident						
4.1	Contain						
4.2	Eradicate						
4.3	Recover						
4.4	Alert Board						
4.5	Alert Compliance Parties						
4.6	Alert Affected Customers						
4.7	Alert Public						
5.0	Resolve						
5.1	Document Incident						
5.2	Conduct Lessons Learned Meeting						
5.3	Review Effectiveness of the Handling Process						
5.4	Identify & Recommend Improvements						
6.0	Closed						
6.1	Preserve Handling Information						
Responsibilities Chart [3], [9].

<h1 class="text-lg font-bold text-center">Communication and Reporting</h1>
<p class="text-base text-dark dark:text-bg-gray">
  This section outlines the procedures for communicating about the incident with stakeholders, customers, employees, and regulatory authorities. The communication and Reporting Policy establishes guidelines for when specific announcements must be made. The board must be alerted to any breach that could substantially damage the reputation or productivity of the organization. The internal company must be alerted to a security incident if the breach will affect a substantial number of employees or otherwise interrupt the general workplace. Third parties must be alerted to the incident if shared data or data processing systems are affected. Customers who have data compromised must be alerted to the occurrence of the breach. The general public does not need to know about a breach unless the severity of the breach necessitates the extra exposure to prevent further damage to the customer in the name of the company. This is the priority list for reporting:
</p>

<ol class="text-base text-dark dark:text-bg-gray">
  <li>Board</li>
  <li>Employees</li>
  <li>Third parties</li>
  <li>Customers</li>
  <li>General public</li>
</ol>


<h1 class="text-lg font-bold text-center">Breach Compliance</h1>
 
Compliance Body	Threshold	Contact Information
GDPR	72 hours from discovery of breach	
HHS	Notify secretary within 60 days if 500 records. Notify secretary within 60 days of the end of the calendar year	Link to report breach of records

PCI-DSS	Any credit card breach	
[10]

Report Log
Date/Time Issued	Recipient Group	Message

<h1 class="text-lg font-bold text-center">Recovery and Remediation</h1>

<p class="text-base text-dark dark:text-bg-gray">
  This section describes the steps that should be taken to restore systems and data to their pre-incident state, implement corrective actions to prevent the attack from happening again, and take actions to prevent future incidents. The IT staff, security personnel, and management will be responsible for implementing the recovery and remediation procedures. The IT staff will restore systems and data from backups, rebuild servers, and reinstall software as necessary. The security personnel will conduct penetration testing, vulnerability scans, and other security assessments to ensure that the recovered systems and data are fully functional and secure. Management will communicate with stakeholders and provide regular status updates on the recovery and remediation process. The recovery procedures will include the following steps:
</p>
<ol class="text-base text-dark dark:text-bg-gray">
  <li>Restore</li>
    <ul>
      <li>Assess the extent of the damage and prioritize systems and data for recovery.</li>
      <li>Restore data from the most recent backups.</li>
      <li>Rebuild servers and reinstall software as necessary.</li>
      <li>Test the recovered systems and data to ensure that they are fully functional and secure.</li>
      <li>Implement additional security measures to prevent similar incidents from occurring in the future.</li>
    </ul>
  <li>Testing Procedures: The testing procedures will include the following steps:</li>
      <ul>
        <li>Conduct penetration testing to identify any vulnerabilities in the recovered systems.</li>
        <li>Conduct vulnerability scans to identify any security weaknesses.</li>
        <li>Conduct other security assessments as necessary to ensure that the recovered systems and data are fully functional and secure.</li>
      </ul>
  <li>Communication Plan: The communication plan will include the following steps:</li>
      <ul>
        <li>Provide regular status updates to stakeholders on the recovery and remediation process.</li>
        <li>Notify stakeholders of significant milestones, such as the completion of the recovery process.</li>
        <li>Conduct post-incident reviews with stakeholders to identify areas for improvement and refine the incident response plan as necessary.</li>
      </ul>
  <li>Post-Incident Review: The post-incident review process will include the following steps:</li>
      <ul>
        <li>Conduct debriefing sessions with team members and stakeholders to identify areas for improvement.</li>
        <li>Document lessons learned from the incident.</li>
        <li>Update the incident response plan as necessary based on the findings of the post-incident review.</li>
      </ul>
</ol>

  <p class="text-base text-dark dark:text-bg-gray">
    The incident response manager will investigate if an employee violated the Acceptable Use Policy, the Remote Access Policy, the Internet Usage Policy, or another company policy. If negligence of one of these policies played a role in the incident, then the security team must take action as specified in these documents and report to leadership the employee, the conduct, and a summary of the evidence. A copy of this evidence must be kept and stored securely.
  </p>

<h1 class="text-lg font-bold text-center">Lessons Learned</h1>
<p class="text-base text-dark dark:text-bg-gray">
  This section should describe the process for reviewing and documenting lessons learned from the incident and using that information to improve the incident response plan. It will include procedures for conducting post-incident reviews and analysis and for identifying and implementing improvements to the incident response plan.
</p>

<h1 class="text-lg font-bold text-center">Summary of the Incident</h1>
<p class="text-base text-dark dark:text-bg-gray">
  A brief description of the incident, including its cause, impact, and the actions taken to resolve it.
</p>

<h1 class="text-lg font-bold text-center">Root Cause Analysis</h1>
<p class="text-base text-dark dark:text-bg-gray">
  An analysis of the root cause of the incident as identified in the Incident Analysis Section, including any contributing factors or underlying issues that led to the incident.
</p>

<h1 class="text-lg font-bold text-center">Areas of Improvement</h1>
<p class="text-base text-dark dark:text-bg-gray">
  A list of areas where improvements can be made to prevent similar incidents from occurring in the future. This can include changes to policies, procedures, technology, or training. Analytics like those in Appendix B will be compared to other incidents to determine program effectiveness.
</p>

<h1 class="text-lg font-bold text-center">Best Practices</h1>
<p class="text-base text-dark dark:text-bg-gray">
  A list of best practices that were effective in responding to the incident. This can include communication strategies, decision-making processes, and other techniques that proved useful.
</p>

<h1 class="text-lg font-bold text-center">Lessons Learned</h1>
<p class="text-base text-dark dark:text-bg-gray">
  A summary of the lessons learned from the incident, including any unexpected outcomes, challenges, or successes. This section should also include recommendations for how to incorporate these lessons into future incident response planning.
</p>

<h1 class="text-lg font-bold text-center">Action Items</h1>
<p class="text-base text-dark dark:text-bg-gray">
  A list of specific action items that need to be taken to address the areas of improvement and incorporate the lessons learned into future incident response planning.
</p>


		Action Deadline Facilitator


<h1 class="text-lg font-bold text-center">Appendix A - Changelog</h1>

Date	Version	Author	Description of Changes	Approved By

				

<h1 class="text-lg font-bold text-center">Appendix B - IR Metrics</h1>

<div class="grid grid-cols-2">
  <div class="col-span-1 bg-gray-200 border border-bg-gray font-bold">Value</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray font-bold">Metric</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"># Unique Data Sources feeding SIEM</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray">MTT Detect Data Source Issue</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray">MTT Correct Data Source Issue</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray">Time to Sweep Enterprise</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray">MTT Forward Alarm</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray">MTT Open Formal Incident</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"># of high severity alerts not reviewed after 8 or 24 hours</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray">Cost per Incident	</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray">MTT Detect Security Incident</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray">MTT Contain Security Incident</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray">MTT Expel Intruder</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray">MTT Bring Systems Online</div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray"></div>
  <div class="col-span-1 bg-gray-200 border border-bg-gray">*MTT means “Mean Time To” [11].</div>
</div>

<h1 class="text-lg font-bold text-center">Works Cited</h1>

<p class="text-base text-dark dark:text-bg-gray">
  [1] 	M. E. Whitman and H. J. Mattord, Management of Information Security, 6 ed., Boston: Cengage, 2018. 
</p>
<p class="text-base text-dark dark:text-bg-gray">
[2] 	K. Stouffer, V. Pillitteri, S. Lightman, M. Abrams and A. Hahn, "Guide to Industrial Control Systems (ICS) Security," 1 May 2015. [Online]. Available: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r2.pdf.
</p>
<p class="text-base text-dark dark:text-bg-gray">
[3] 	OCIO/Deputiy CIO for Information Technology Security, "Information Security Handbook," 24 August 2011. [Online]. Available: https://www.nasa.gov/pdf/589502main_ITS-HBK-2810.09-02%20%5BNASA%20Information%20Security%20Incident%20Management%5D.pdf.
</p>
<p class="text-base text-dark dark:text-bg-gray">
[4] 	Virginia Tech, "Virginia Tech Guide for Cyber Security Incident Response," 28 January 2016. [Online]. Available: https://security.vt.edu/content/dam/security_vt_edu/downloads/incident_response.pdf.
</p>
<p class="text-base text-dark dark:text-bg-gray">
[5] 	S. G. Kassa, "IT Asset Valuation, Risk Assessment and Control Implementation Model," 1 May 2017. [Online]. Available: https://www.isaca.org/resources/isaca-journal/issues/2017/volume-3/it-asset-valuation-risk-assessment-and-control-implementation-model.
</p>
<p class="text-base text-dark dark:text-bg-gray">
[6] 	"Standards for Security Categorization of Federal Information and Information Systems," 1 February 2004. [Online]. Available: https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf.
</p>
<p class="text-base text-dark dark:text-bg-gray">
[7] 	G. Bassett, D. C. Hylender, P. Langlois, A. Pinto and S. Widup, "https://www.verizon.com/business/resources/reports/2022/dbir/2022-data-breach-investigations-report-dbir.pdf," 2022. [Online]. Available: https://www.verizon.com/business/resources/reports/2022/dbir/2022-data-breach-investigations-report-dbir.pdf.
</p>
<p class="text-base text-dark dark:text-bg-gray">
[8] 	P. Henry, "Best Practices In Digital Evidence Collection," 12 September 2009. [Online]. Available: https://www.sans.org/blog/best-practices-in-digital-evidence-collection/.
</p>
<p class="text-base text-dark dark:text-bg-gray">
[9] 	MicroFocus, "RACI matrix for Incident Management," [Online]. Available: https://docs.microfocus.com/SM/9.52/Hybrid/Content/BestPracticesGuide_PD/IncidentManagmentBestPractice/RACI_matrix_for_IM.htm.
</p>
<p class="text-base text-dark dark:text-bg-gray">
[10] 	European Union, "Writing a GDPR-compliant privacy notice (template included)," [Online]. Available: https://gdpr.eu/privacy-notice/.
</p>
<p class="text-base text-dark dark:text-bg-gray">
[11] 	D. Murdoch, Blue Team Handbook: SOC, SIEM, and Threat Hunting Use Cases, Monee, IL: Don Murdoch, 2019. 
</p>
<p class="text-base text-dark dark:text-bg-gray">
[12] 	G. Johansen, Digital Forensics and Incident Response, 2 ed., Birmingham, UK: Packt Publishing, 2020. 
</p>
  </div>
</div>
    );
}

export default IncidentResponsePlan;
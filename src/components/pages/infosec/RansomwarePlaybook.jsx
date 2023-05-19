import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

function RansomwareIRP() {
    return (
<div class="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div class="lg:w-4/5 sm:w-7/8 m-auto">

    <h1 class="text-lg font-bold text-center">Introduction</h1>
    <p class="text-base text-dark dark:text-bg-gray">
      Lorem Ipsum
    </p>
    
    <h1 class="text-lg font-bold text-center">Introduction</h1>
    <p class="text-base text-dark dark:text-bg-gray">
      Lorem Ipsum
    </p>

    <h1 class="text-lg font-bold text-center">Introduction</h1>
    <p class="text-base text-dark dark:text-bg-gray">
      Lorem Ipsum
    </p>

    <h1 class="text-lg font-bold text-center">Introduction</h1>
    <p class="text-base text-dark dark:text-bg-gray">
      Lorem Ipsum
    </p>
    
    <h1 class="text-lg font-bold text-center">Introduction</h1>
    <p class="text-base text-dark dark:text-bg-gray">
      Lorem Ipsum
    </p>

    <h1 class="text-lg font-bold text-center"></h1>
    <p class="text-base text-dark dark:text-bg-gray">
      <ol>
        <li>Maintain offline, encrypted backups taken at regular intervals.</li>
        <li>Establish procedure for restoring a system and practice implementing the plan at least once per year.</li>
        <li>Create operating system images on secure thumb drives with standard software that can be used to completely rebuild a system if backups cannot be used.</li>
        <li>Train staff to report incidents as soon as they are detected to a central contact [4].</li>
        <li>Update systems regularly</li>
        <li>Scan for vulnerabilities, public-facing resources</li>
        <li>Whitelist applications</li>
        <li>Conduct SETA</li>
        <li>Scan email</li>
        <li>Firewall systems and networks</li>
        <li>Disable remote access</li>
        <li>Join community resource groups such as ISAC</li>
      </ol>
    </p>
    <p class="text-base text-dark dark:text-bg-gray">
      [5], [6]
    </p>
    <h1 class="text-lg font-bold text-center">Incident Preparation</h1>
    
  <h1 class="text-lg font-bold text-center">Incident Identification</h1>
  <p class="text-base text-dark dark:text-bg-gray">
      The steps outlined below detail how to prevent further damage or loss by implementing specific procedures for isolating and containing incidents. The response attempts to limit the scope of the incident to as few devices as possible. Look for the below signs on your computer:
  </p>
  <ol>
    <li>Pop-ups demanding ransom or indicating ransomware</li>
    <li>Strange file extensions like .locked, .encrypted, or .crypt</li>
    <li>Slow performance</li>
    <li>Unusual programs or downloads appearing</li>
    <li>Files cannot be accessed without a password</li>
    <li>Emails asking for ransom payment</li>
  </ol>
  <p class="text-base text-dark dark:text-bg-gray">
      If any of these criteria are observed, report the incident to your supervisor and continue to the Containment Section [7], .
  </p>

  <h1 class="text-lg font-bold text-center">Incident Containment</h1>
  <p class="text-base text-dark dark:text-bg-gray">
      This section establishes the procedures for collecting and preserving evidence related to the incident. The Procedures for collecting, preserving, and analyzing evidence must also secure and protect evidence. A chain of custody fulfills this objective. Physical evidence must be secured in a locked location such that it cannot be easily accessed or tampered with [8]. 
    </p>

  <h1 class="text-lg font-bold text-center">Standard Isolation Procedure</h1>
  <p class="text-base text-dark dark:text-bg-gray">
<ol>
  <li>Disable backup tasks to avoid contaminating backups [9].</li>
  <li>Photograph ransom note</li>
  <li>Disconnect the affected system from the network.</li>
  <li>
    <ul>
      <li>If physically plugged into the network, unplug the system. If device is wifi-connected, turn off wifi or contact IT to alert them to logically remove the infected device from the network.</li>
    </ul>
  </li>
  <li>Collect Memory Image</li>
  <li>
    <ul>
        <li>IT will create an image of the memory of the device.</li>
    </ul>
  </li>
  <li>Image hard drive</li>
  <li>
    <ul>
        <li>If hard disk encryption detected (using a tool like Zero-View) such as full disk encryption i.e. PGP Disk — collect "logical image" of hard disk using dd.exe, Helix - locally or remotely via F-Response.</li>
    </ul>
  </li>
  <li>Shut down the affected system.</li>
  <li>
    <ul>
      <li>Poweroff the device using the power button or unplugging the system to prevent further damage or encryption.</li>
      <li>If the computer is a laptop and does not shut down when the cord is removed then remove the battery.</li>
    </ul>
  </li>
  <li>Alert other potential targets</li>
  <li>    
      <ul>
        <li>IT will alert company employees and business partners to watch out for suspicious activity.</li>
    </ul>
  </li>
  <li>Preserve evidence</li>
  <li>
    <ul>
        <li>Diagram and label all cords.</li>
        <li>Document all device model numbers and serial numbers.</li>
        <li>Disconnect all cords and devices.</li>
        <li>Package all components (using anti-static evidence bags).</li>
        <li>Document all steps used in the seizure [10].</li>
    </ul>
  </li>
  <li>Consolidate external logs from timeframe of attack</li>
  <li>Identify other compromised devices</li>
</ol>
    </p>

Chain of Custody
Artifact	Date/Time	Location	Collector	Witness
				

Eradication
1.	Identify IoCs
2.	Search for IoCs on other devices
3.	Identify latest uncompromised backup
4.	Determine affected data types
5.	Count compromised records
6.	Assess the extent of the damage and prioritize systems and data for recovery
7.	Document Incident
8.	Preserve Handling Information

Recovery and Remediation
The IT staff, security personnel, and management will be responsible for implementing the recovery and remediation procedures. The IT staff will restore systems and data from backups, rebuild servers, and reinstall software as necessary. The recovery procedures will include the following steps:
1.	Restore from backup
a.	Restore data from the most recent backups on private network.
b.	Monitor for IoCs.
c.	Test the recovered systems and data to ensure that they are fully functional and secure.
d.	Implement additional security measures to prevent similar incidents from occurring in the future.
2.	Rebuild machine if backup unavailable
a.	Rebuild servers on private network and reinstall software as necessary.
3.	Conduct penetration testing to identify any vulnerabilities in the recovered systems
4.	Conduct vulnerability scans to identify any security weaknesses
5.	Conduct other security assessments as necessary to ensure that the recovered systems and data are fully functional and secure
6.	Put remediated systems into production
7.	Log restored systems closely
8.	Determine if policy violation played role in incident

Communication and Reporting
1.	Update stakeholders on the recovery and remediation process
2.	Notify stakeholders of significant milestones in the following order
a.	Board.
b.	Employees.
c.	Third parties.
d.	Customers.
e.	General public.

Breach Compliance 
Compliance Body	Threshold	Contact Information
GDPR	72 hours from discovery of breach	
HHS	Notify secretary within 60 days if 500 records. Notify secretary within 60 days of the end of the calendar year	Link to report breach of records

PCI-DSS	Any credit card breach	
[11]

Communication Log
Date/Time Issued	Recipient Group	Message
		
		
		
		
Lessons Learned
1.	Summarize the Incident
a.	A brief description of the incident, including its cause, impact, and the actions taken to resolve it.
2.	Identify the Root Cause
a.	Include any contributing factors or underlying issues that led to the incident.
3.	List Areas of Improvement
a.	Change playbook as needed.
4.	List Best Practices
a.	Add best practices to playbook.
[12]
Appendix A - Changelog
Date	Version	Author	Description of Changes	Approved By
				


Works Cited

[1] 	D. Murdoch, Blue Team Handbook: SOC, SIEM, and Threat Hunting Use Cases, Monee, IL: Don Murdoch, 2019. 
[2] 	S. G. Kassa, "IT Asset Valuation, Risk Assessment and Control Implementation Model," 1 May 2017. [Online]. Available: https://www.isaca.org/resources/isaca-journal/issues/2017/volume-3/it-asset-valuation-risk-assessment-and-control-implementation-model.
[3] 	J. Tidy, "Colonial Pipeline: US recovers most of ransom, justice department says," 8 June 2021. [Online]. Available: https://www.bbc.com/news/business-57394041.
[4] 	M. Simos, "3 steps to prevent and recover from ransomware," 7 September 2021. [Online]. Available: https://www.microsoft.com/en-us/security/blog/2021/09/07/3-steps-to-prevent-and-recover-from-ransomware/.
[5] 	CISA, "Ransomware Guide," 30 September 2020. [Online]. Available: https://www.cisa.gov/stopransomware/ransomware-guide.
[6] 	Secret Service, "Preparing for a Cyber Incident," [Online]. Available: https://www.secretservice.gov/sites/default/files/reports/2021-11/Preparing%20for%20a%20Cyber%20Incident%20-%20A%20Guide%20to%20Ransomware%20v%201.1.pdf.
[7] 	Australian Cyber Security Centre, "Ransomware," [Online]. Available: https://www.cyber.gov.au/ransomware.
[8] 	G. Bassett, D. C. Hylender, P. Langlois, A. Pinto and S. Widup, "https://www.verizon.com/business/resources/reports/2022/dbir/2022-data-breach-investigations-report-dbir.pdf," 2022. [Online]. Available: https://www.verizon.com/business/resources/reports/2022/dbir/2022-data-breach-investigations-report-dbir.pdf.
[9] 	R. Islam, "The Guide To Dealing With A Ransomware Crisis For Businesses," 27 September 2022. [Online]. Available: https://www.forbes.com/sites/forbestechcouncil/2022/09/27/the-guide-to-dealing-with-a-ransomware-crisis-for-businesses/?sh=1940cd2e1b7c.
[10] 	P. Henry, "Best Practices In Digital Evidence Collection," 12 September 2009. [Online]. Available: https://www.sans.org/blog/best-practices-in-digital-evidence-collection/.
[11] 	European Union, "Writing a GDPR-compliant privacy notice (template included)," [Online]. Available: https://gdpr.eu/privacy-notice/.
[12] 	FRSecure, "Ransomware Response Playbook," [Online]. Available: https://frsecure.com/ransomware-response-playbook/.
[13] 	G. Johansen, Digital Forensics and Incident Response, 2 ed., Birmingham, UK: Packt Publishing, 2020. 
[14] 	M. E. Whitman and H. J. Mattord, Management of Information Security, 6 ed., Boston: Cengage, 2018. 
[15] 	OCIO/Deputiy CIO for Information Technology Security, "Information Security Handbook," 24 August 2011. [Online]. Available: https://www.nasa.gov/pdf/589502main_ITS-HBK-2810.09-02%20%5BNASA%20Information%20Security%20Incident%20Management%5D.pdf.
[16] 	K. Stouffer, V. Pillitteri, S. Lightman, M. Abrams and A. Hahn, "Guide to Industrial Control Systems (ICS) Security," 1 May 2015. [Online]. Available: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r2.pdf.
[17] 	MicroFocus, "RACI matrix for Incident Management," [Online]. Available: https://docs.microfocus.com/SM/9.52/Hybrid/Content/BestPracticesGuide_PD/IncidentManagmentBestPractice/RACI_matrix_for_IM.htm.
[18] 	Virginia Tech, "Virginia Tech Guide for Cyber Security Incident Response," 28 January 2016. [Online]. Available: https://security.vt.edu/content/dam/security_vt_edu/downloads/incident_response.pdf.
[19] 	"Standards for Security Categorization of Federal Information and Information Systems," 1 February 2004. [Online]. Available: https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf.

  </div>
</div>
    );
}

export default RansomwareIRP;
import React from 'react';
import '../../../App.css';

function RansomwareIRP() {
    return (
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div className="lg:w-4/5 sm:w-7/8 m-auto">
    <h1 className="text-2xl font-bold text-center">Ransomware Incident Response Playbook</h1>
    <p className="text-sm text-center text-dark dark:text-bg-gray">
      Michael Fahnlander 3/22/23
    </p>
    
    <h1 className="text-lg mt-5 font-bold text-center">Incident Preparation</h1>
    <ol className="p-5 text-base text-dark dark:text-bg-gray list-decimal">
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
    <p className="text-base text-dark dark:text-bg-gray">
      [5], [6]
    </p>
    
  <h1 className="text-lg font-bold text-center">Incident Identification</h1>
  <p className="text-base text-dark dark:text-bg-gray">
      The steps outlined below detail how to prevent further damage or loss by implementing specific procedures for isolating and containing incidents. The response attempts to limit the scope of the incident to as few devices as possible. Look for the below signs on your computer:
  </p>
  <ol className="p-5 text-base text-dark dark:text-bg-gray list-decimal">
    <li>Pop-ups demanding ransom or indicating ransomware</li>
    <li>Strange file extensions like .locked, .encrypted, or .crypt</li>
    <li>Slow performance</li>
    <li>Unusual programs or downloads appearing</li>
    <li>Files cannot be accessed without a password</li>
    <li>Emails asking for ransom payment</li>
  </ol>
  <p className="text-base text-dark dark:text-bg-gray">
      If any of these criteria are observed, report the incident to your supervisor and continue to the Containment Section [7], .
  </p>

  <h1 className="text-lg font-bold text-center">Incident Containment</h1>
  <p className="text-base text-dark dark:text-bg-gray">
      This section establishes the procedures for collecting and preserving evidence related to the incident. The Procedures for collecting, preserving, and analyzing evidence must also secure and protect evidence. A chain of custody fulfills this objective. Physical evidence must be secured in a locked location such that it cannot be easily accessed or tampered with [8]. 
    </p>

  <h1 className="text-lg font-bold text-center">Standard Isolation Procedure</h1>
<ol className="p-5 text-base text-dark dark:text-bg-gray list-decimal">
  <li>Disable backup tasks to avoid contaminating backups [9].</li>
  <li>Photograph ransom note</li>
  <li>Disconnect the affected system from the network.</li>
    <ul>
      <li>If physically plugged into the network, unplug the system. If device is wifi-connected, turn off wifi or contact IT to alert them to logically remove the infected device from the network.</li>
    </ul>
  <li>Collect Memory Image</li>
    <ul>
        <li>IT will create an image of the memory of the device.</li>
    </ul>
  <li>Image hard drive</li>
    <ul>
        <li>If hard disk encryption detected (using a tool like Zero-View) such as full disk encryption i.e. PGP Disk — collect "logical image" of hard disk using dd.exe, Helix - locally or remotely via F-Response.</li>
    </ul>
  <li>Shut down the affected system.</li>
    <ul>
      <li>Poweroff the device using the power button or unplugging the system to prevent further damage or encryption.</li>
      <li>If the computer is a laptop and does not shut down when the cord is removed then remove the battery.</li>
    </ul>
  <li>Alert other potential targets</li>
  <ul>
    <li>IT will alert company employees and business partners to watch out for suspicious activity.</li>
  </ul>
  <li>Preserve evidence</li>
    <ul>
        <li>Diagram and label all cords.</li>
        <li>Document all device model numbers and serial numbers.</li>
        <li>Disconnect all cords and devices.</li>
        <li>Package all components (using anti-static evidence bags).</li>
        <li>Document all steps used in the seizure [10].</li>
    </ul>
  <li>Consolidate external logs from timeframe of attack</li>
  <li>Identify other compromised devices</li>
</ol>

<h1 className="text-lg font-bold text-center">Chain of Custody</h1>
<table className="table-auto m-auto w-full">
  <thead>
    <tr className="border border-dark dark:border-bg-gray">
      <th className="border border-dark dark:border-bg-gray p-3">Artifact</th>
      <th className="border border-dark dark:border-bg-gray p-3">Date/Time Issued</th>
      <th className="border border-dark dark:border-bg-gray p-3">Location</th>
      <th className="border border-dark dark:border-bg-gray p-3 w-2/5">Message</th>
      <th className="border border-dark dark:border-bg-gray p-3 w-2/5">Collector</th>
      <th className="border border-dark dark:border-bg-gray p-3 w-2/5">Witness</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border border-dark dark:border-bg-gray h-7">
      <td className="border border-dark dark:border-bg-gray"> </td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
    </tr>
    <tr className="border border-dark dark:border-bg-gray h-7">
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray "></td>
      <td className="border border-dark dark:border-bg-gray"></td>
    </tr>
    <tr className="border border-dark dark:border-bg-gray h-7">
      <td className="border border-dark dark:border-bg-gray"> </td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
    </tr>
  </tbody>
</table>				

<h1 className="text-lg font-bold text-center">Eradication</h1>
<ol className="p-5 text-base text-dark dark:text-bg-gray list-decimal">
  <li>Identify IoCs</li>
  <li>Search for IoCs on other devices</li>
  <li>Identify latest uncompromised backup</li>
  <li>Determine affected data types</li>
  <li>Count compromised records</li>
  <li>Assess the extent of the damage and prioritize systems and data for recovery</li>
  <li>Document Incident</li>
  <li>Preserve Handling Information</li>
</ol>

<h1 className="text-lg font-bold text-center">Recovery and Remediation</h1>
<p className="text-base text-dark dark:text-bg-gray">
The IT staff, security personnel, and management will be responsible for implementing the recovery and remediation procedures. The IT staff will restore systems and data from backups, rebuild servers, and reinstall software as necessary. The recovery procedures will include the following steps:
</p>
<ol className="p-5 text-base text-dark dark:text-bg-gray list-decimal">
  <li>Restore from backup</li>
  <ul>
    <li>Restore data from the most recent backups on private network.</li>
    <li>Monitor for IoCs.</li>
    <li>Test the recovered systems and data to ensure that they are fully functional and secure.</li>
    <li>Implement additional security measures to prevent similar incidents from occurring in the future.</li>
  </ul>

  <li>Rebuild machine if backup unavailable</li>
  <ul>
    <li>Rebuild servers on private network and reinstall software as necessary.</li>
  </ul>
  <li>Conduct penetration testing to identify any vulnerabilities in the recovered systems</li>
  <li>Conduct vulnerability scans to identify any security weaknesses</li>
  <li>Conduct other security assessments as necessary to ensure that the recovered systems and data are fully functional and secure</li>
  <li>Put remediated systems into production</li>
  <li>Log restored systems closely</li>
  <li>Determine if policy violation played role in incident</li>
</ol>

<h1 className="text-lg font-bold text-center">Communication and Reporting</h1>
<ol className="text-base m-auto p-5 list-decimal text-dark dark:text-bg-gray">
  <li>Update stakeholders on the recovery and remediation process</li>
  <li>Notify stakeholders of significant milestones in the following order</li>
  <li>Board</li>
  <li>Employees</li>
  <li>Third parties</li>
  <li>Customers</li>
  <li>General public</li>
</ol>

<h1 className="text-lg font-bold text-center">Breach Compliance</h1>
<table className="table-auto m-auto w-full">
  <thead>
    <tr className="border border-dark dark:border-bg-gray">
      <th className="border border-dark dark:border-bg-gray p-3">Compliance Body</th>
      <th className="border border-dark dark:border-bg-gray p-3">Threshold</th>
      <th className="border border-dark dark:border-bg-gray p-3">Contact Information</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border border-dark dark:border-bg-gray h-7">
      <td className="border border-dark dark:border-bg-gray">GDPR</td>
      <td className="border border-dark dark:border-bg-gray">72 hours from discovery of breach</td>
      <td className="border border-dark dark:border-bg-gray"></td>
    </tr>
    <tr className="border border-dark dark:border-bg-gray h-7">
      <td className="border border-dark dark:border-bg-gray">HHS</td>
      <td className="border border-dark dark:border-bg-gray">Notify secretary within 60 days if 500 records. Notify secretary within 60 days of the end of the calendar year	Link to report breach of any records.</td>
      <td className="border border-dark dark:border-bg-gray "> </td>
    </tr>
    <tr className="border border-dark dark:border-bg-gray h-7">
      <td className="border border-dark dark:border-bg-gray">PCI-DSS</td>
      <td className="border border-dark dark:border-bg-gray">Any credit card breach</td>
      <td className="border border-dark dark:border-bg-gray"></td>
    </tr>
  </tbody>
</table>
[10]

<h1 className="text-lg font-bold text-center">Communication Log</h1>
  <table className="table-auto m-auto w-full">
  <thead>
    <tr className="border border-dark dark:border-bg-gray">
      <th className="border border-dark dark:border-bg-gray p-3">Date/Time Issued</th>
      <th className="border border-dark dark:border-bg-gray p-3">Medium</th>
      <th className="border border-dark dark:border-bg-gray p-3">Group</th>
      <th className="border border-dark dark:border-bg-gray p-3 w-2/5">Message</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border border-dark dark:border-bg-gray h-7">
      <td className="border border-dark dark:border-bg-gray"> </td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
    </tr>
    <tr className="border border-dark dark:border-bg-gray h-7">
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray "></td>
      <td className="border border-dark dark:border-bg-gray"></td>
    </tr>
    <tr className="border border-dark dark:border-bg-gray h-7">
      <td className="border border-dark dark:border-bg-gray"> </td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
    </tr>
  </tbody>
</table>

<h1 className="text-lg font-bold text-center">Lessons Learned</h1>
<ol className="p-5 text-base text-dark dark:text-bg-gray list-decimal">
  <li>Summarize the Incident</li>
  <ul>
    <li>A brief description of the incident, including its cause, impact, and the actions taken to resolve it. </li>
  </ul>
  <li>Identify the Root Cause</li>
  <ul>
    <li>Include any contributing factors or underlying issues that led to the incident.</li>
  </ul>
  <li>List Areas of Improvement</li>
  <ul>
    <li>Change playbook as needed.</li>
  </ul>
  <li>List Best Practices</li>
  <ul>
    <li>Add best practices to playbook.</li>
  </ul>
</ol>
[12]

<h1 className="text-lg font-bold text-center">Appendix A - Changelog</h1>
<table className="table-auto m-auto w-full">
  <thead>
    <tr className="border border-dark dark:border-bg-gray">
      <th className="border border-dark dark:border-bg-gray p-3">Date</th>
      <th className="border border-dark dark:border-bg-gray p-3">Version</th>
      <th className="border border-dark dark:border-bg-gray p-3">Author</th>
      <th className="border border-dark dark:border-bg-gray p-3">Description of Changes</th>
      <th className="border border-dark dark:border-bg-gray p-3">Approved By</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border border-dark dark:border-bg-gray h-7">
    <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
    </tr>
    <tr className="border border-dark dark:border-bg-gray h-7">
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray "></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
    </tr>
    <tr className="border border-dark dark:border-bg-gray h-7">
      <td className="border border-dark dark:border-bg-gray"> </td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
      <td className="border border-dark dark:border-bg-gray"></td>
    </tr>
  </tbody>
</table>			

<h1 className="text-lg font-bold text-center">Works Cited</h1>

<p className="text-base text-dark dark:text-bg-gray">
[1] 	D. Murdoch, Blue Team Handbook: SOC, SIEM, and Threat Hunting Use Cases, Monee, IL: Don Murdoch, 2019. 
</p>
<p className="text-base text-dark dark:text-bg-gray">
[2]   S. G. Kassa, "IT Asset Valuation, Risk Assessment and Control Implementation Model," 1 May 2017. [Online]. Available: https://www.isaca.org/resources/isaca-journal/issues/2017/volume-3/it-asset-valuation-risk-assessment-and-control-implementation-model.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[3] 	J. Tidy, "Colonial Pipeline: US recovers most of ransom, justice department says," 8 June 2021. [Online]. Available: https://www.bbc.com/news/business-57394041.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[4] 	M. Simos, "3 steps to prevent and recover from ransomware," 7 September 2021. [Online]. Available: https://www.microsoft.com/en-us/security/blog/2021/09/07/3-steps-to-prevent-and-recover-from-ransomware/.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[5] 	CISA, "Ransomware Guide," 30 September 2020. [Online]. Available: https://www.cisa.gov/stopransomware/ransomware-guide.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[6] 	Secret Service, "Preparing for a Cyber Incident," [Online]. Available: https://www.secretservice.gov/sites/default/files/reports/2021-11/Preparing%20for%20a%20Cyber%20Incident%20-%20A%20Guide%20to%20Ransomware%20v%201.1.pdf.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[7] 	Australian Cyber Security Centre, "Ransomware," [Online]. Available: https://www.cyber.gov.au/ransomware.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[8] 	G. Bassett, D. C. Hylender, P. Langlois, A. Pinto and S. Widup, "https://www.verizon.com/business/resources/reports/2022/dbir/2022-data-breach-investigations-report-dbir.pdf," 2022. [Online]. Available: https://www.verizon.com/business/resources/reports/2022/dbir/2022-data-breach-investigations-report-dbir.pdf.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[9] 	R. Islam, "The Guide To Dealing With A Ransomware Crisis For Businesses," 27 September 2022. [Online]. Available: https://www.forbes.com/sites/forbestechcouncil/2022/09/27/the-guide-to-dealing-with-a-ransomware-crisis-for-businesses/?sh=1940cd2e1b7c.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[10] 	P. Henry, "Best Practices In Digital Evidence Collection," 12 September 2009. [Online]. Available: https://www.sans.org/blog/best-practices-in-digital-evidence-collection/.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[11] 	European Union, "Writing a GDPR-compliant privacy notice (template included)," [Online]. Available: https://gdpr.eu/privacy-notice/.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[12] 	FRSecure, "Ransomware Response Playbook," [Online]. Available: https://frsecure.com/ransomware-response-playbook/.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[13] 	G. Johansen, Digital Forensics and Incident Response, 2 ed., Birmingham, UK: Packt Publishing, 2020. 
</p>
<p className="text-base text-dark dark:text-bg-gray">
[14] 	M. E. Whitman and H. J. Mattord, Management of Information Security, 6 ed., Boston: Cengage, 2018. 
</p>
<p className="text-base text-dark dark:text-bg-gray">
[15] 	OCIO/Deputiy CIO for Information Technology Security, "Information Security Handbook," 24 August 2011. [Online]. Available: https://www.nasa.gov/pdf/589502main_ITS-HBK-2810.09-02%20%5BNASA%20Information%20Security%20Incident%20Management%5D.pdf.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[16] 	K. Stouffer, V. Pillitteri, S. Lightman, M. Abrams and A. Hahn, "Guide to Industrial Control Systems (ICS) Security," 1 May 2015. [Online]. Available: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r2.pdf.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[17] 	MicroFocus, "RACI matrix for Incident Management," [Online]. Available: https://docs.microfocus.com/SM/9.52/Hybrid/Content/BestPracticesGuide_PD/IncidentManagmentBestPractice/RACI_matrix_for_IM.htm.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[18] 	Virginia Tech, "Virginia Tech Guide for Cyber Security Incident Response," 28 January 2016. [Online]. Available: https://security.vt.edu/content/dam/security_vt_edu/downloads/incident_response.pdf.
</p>
<p className="text-base text-dark dark:text-bg-gray">
[19] 	"Standards for Security Categorization of Federal Information and Information Systems," 1 February 2004. [Online]. Available: https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf.
</p>
  </div>
</div>
    );
}

export default RansomwareIRP;
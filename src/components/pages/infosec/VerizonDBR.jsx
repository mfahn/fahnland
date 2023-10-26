import React from 'react';
import '../../../App.css';

function VerizonDBR() {
    return (
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div className="lg:w-4/5 sm:w-7/8 m-auto">

    <h1 className="text-2xl font-bold text-center">Verizon DBIR Discussion</h1>
    <p className="text-sm text-center text-dark dark:text-bg-gray p-5">
      Michael Fahnlander 2/12/23
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      In 2020-2021, the FBI recovered or froze 93% of money lost to Business Email Compromises for ½ of the organizations that sought their help (Bassett, et all., 2022). This is just one interesting factoid from Verizon's 2022 Data Breach Investigations Report (DBIR) which aggregated terabytes of breach data in order to observe patterns in the types of attacks by malicious actors. This article operates on the principle that offense informs defense, and this document provides invaluable insight into the habits of malicious attackers. The DBIR informs defenders about the most popular vectors to defend against, helping them allocate finite and often inadequate resources to maximize their effectiveness.
    </p>

    <h1 className="text-lg font-bold text-center">Social Engineering</h1>
    <p className="text-base text-dark dark:text-bg-gray">
      The DBIR points out that the prevalence of new cloud container security tools have improved the overall state of security which could contribute to the lower percentage of compromising technology. It is not clear to me if misconfigurations by staff are included in this metric, such as using a weak password that becomes compromised and leads to unauthorized access to data or if it is purely related to some type of social engineering. 
    </p>

    <p className="text-base text-dark dark:text-bg-gray">
      Despite these trends and improvements, the DBIR states that a steady 2.9% of employees fall for phishing attacks year over year (Bassett, et all., 2022). Since this number has remained consistent, attackers have consistently attacked it. 82% of data breaches involve compromising a person (Bassett, et all., 2022). About 15% of attack vectors originate from social engineering (Bassett, et all., 2022). Social engineering makes up about 30% of attack methodologies 40% of attack vectors in data breaches (Bassett, et all., 2022). It is important to understand that over 60% of social engineering happens through email (phishing), making it by far the most common type of social engineering (Bassett, et all., 2022). 35% of ransomware, likely the thing that keeps security professionals up at night the most, originates from email (Bassett, et all., 2022).
      While taking advantage of staff remains a popular target, it seems that social engineering has collectively decreased as Figure 33 shows below.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      Note the DBIR's blue line that shows a significant spike in social engineering in 2020 but a downward trend since then (Bassett, et all., 2022). It could be related to Figure 48 below that shows steady and promising upward trends in the number of phishing reports, indicating that the workforce is collectively wizening to the onslaught of malicious email.
      Social engineering has fallen off. Are we just better at social engineering training now? Is it a more technical generation entering the workforce? Had big spike during covid…
    </p>

    <p className="text-base text-dark dark:text-bg-gray">
      I wonder if the spike in 2020 related to Covid-19. Indeed, the Federal Trade Commission issued a notice during this time regarding Covid-19 scam and spam reports [1]. The two spikes in the graph could also be related to US elections, as the midterms occurred in 2018 and the presidential election occurred in 2020. It seems to me that significant events make good fodder for phishing that seeks to capitalize on the fears, concerns, or interest of large bodies of people.
    </p>

	  <h1 className="text-lg font-bold text-center">Surprises</h1>
    <p className="text-base text-dark dark:text-bg-gray">
      More than 50% of data breaches are discovered after the threat actor reveals it publicly either as a flex of their hacking skills or in the process of seeking ways to monetize it like advertising stolen data, credentials, etc. (Bassett, et all., 2022). I see great potential for business models that monitor hacking forums for references to company data. It is interesting to see that OSINT works in the reverse (meaning for defenders) as well. 
    </p>
    <h1 className="text-lg font-bold text-center">Takeaways</h1>

    <p className="text-base text-dark dark:text-bg-gray">
      One of the biggest takeaways for me is make your organization the most difficult target by locking down the biggest footprints of the organization. Every organization has employees, so ensure regular and comprehensive security training. Every organization has email, so implement controls to block certain filetypes, spam, etc. Every organization has a website, so make sure that it is securely developed. While this may not stop dedicated hackers, it will weed out many who will seek easier targets when an organization appears well protected against the most common and easiest attacks. Hacking is a business, and naturally most hackers attack the weakest points that could make a return. Certainly, one easy way to mitigate risk is by blocking known malicious IP addresses and domains. The report says that only 0.4% of malicious IP addresses changed since the last DBIR (Bassett, et all., 2022). This finding definitely surprised me because I would think it would be easy to change domains or use redundancy in the event that security products began blocking my malicious domains. The ZeuS banking trojan, for example, used multiple layers of backups and redundancy to ensure infected devices could continue to communicate with C2 infrastructure. When a number of government agencies attempted to execute a takedown of domains, Ips, and infrastructure belonging to ZeuS, the malware's operations were unaffected [2].
    </p>
    <h1 className="text-lg font-bold text-center">Works Cited</h1>

    <p className="text-base text-dark dark:text-bg-gray">
    [1] 	FTC, "COVID-19 scam reports, by the numbers," 4 March 2020. [Online]. Available: https://consumer.ftc.gov/consumer-alerts/2020/04/covid-19-scam-reports-numbers.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
    [2] 	B. Krebs, "'Operation Tovar' Targets 'Gameover' ZeuS Botnet, CryptoLocker Scourge," 2 June 2014. [Online]. Available: https://krebsonsecurity.com/2014/06/operation-tovar-targets-gameover-zeus-botnet-cryptolocker-scourge/.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
    [3] 	G. Bassett, D. C. Hylender, P. Langlois, A. Pinto and S. Widup, "https://www.verizon.com/business/resources/reports/2022/dbir/2022-data-breach-investigations-report-dbir.pdf," 2022. [Online]. Available: https://www.verizon.com/business/resources/reports/2022/dbir/2022-data-breach-investigations-report-dbir.pdf.
    </p>

  </div>
</div>
    );
}

export default VerizonDBR;
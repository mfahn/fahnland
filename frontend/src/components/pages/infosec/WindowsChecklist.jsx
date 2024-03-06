function WindowsChecklist(){
    return(
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg  dark:text-bg-gray dark:bg-navy">
    <div className="lg:w-4/5 sm:w-7/8 mr-auto ml-auto">
            <div className="text-center font-bold"><h1>Windows Checklist</h1></div>
            <p>In Collegiate Cyber Defense Competitions (CCDC), a team of defenders must protect a network from the intrusions of an active red team. They must simultaneously secure their systems and keep scored services like websites and databases online. During the competition, simulated employers will bring business tasks to the team of defenders who must carry out the business instructions. This is a generic *nix Checklist to guide those defensive efforts.
            </p>

            <div>
            <h2>FW</h2>
            <ol>
                <li><h2>Turn on Windows Firewall</h2></li>
                <h3>netsh advfirewall set allprofiles firewallpolicy allowinbound,blockoutbound</h3>
                    <h4>Start Menu {'>'}Windows Defender Firewall with Advanced Security</h4>
                    <div>Click “Windows Defender Firewall Properties” in the center pane</div>
                    <div>Ensure that Domain, Public, and Private Profiles are enabled</div>
                <div>After DC disables Group Firewalls run gpupdate /force on each machine</div>
                <div>For clients:</div>
                <div>
                    <div>
                        <div>Open a shell (Powershell or cmd)</div>
                        <div>Type “gpupdate /force”</div>
                    </div>
                </div>
                <div>For DC:</div>
                <div>
                        <div>On domain controller, open “Group Policy Management”</div>
                        <div>Expand the tree on the side until you see “Group Policy Objects.”</div>
                        <div>In Group Policy Objects, find one called “Firewall” or something similar</div>
                        <div>Disable it by going to “Details” on the top bar and changing “GPO Status”  to “All settings disabled”</div>
                </div>
                <div>Configure Firewall Properly for each separate box - Inbound AND Outbound</div>

                    <div>Start Menu -{'>'}Windows Defender Firewall with Advanced Security</div>

                <div>	Multiple consecutive rules can be enabled/disabled at once by holding shift and selecting the outermost rules</div>

                <div>Windows Firewall (GPO)</div>
                <div>	Gpmc.msc </div>
                <div>Computer Configuration {'>'}Policies {'>'}Windows Settings {'>'}Security Settings {'>'}Windows Defender Firewall</div>
            </ol>
        </div>

        <div>
            <h1>Passwords</h1>
            <div>
                Set passwords for all user accounts
                <div>	Open a shell (ONLY Powershell)</div>
                <div>	Local - Type as follows - probably will work</div>
                $password = Read-Host -AsSecureString
                Get-LocalUser * | Set-LocalUser -Password $password -Confirm

                Change Local Account Passwords (PowerShell as ADMIN):
                gwmi -className win32_useraccount -filter localaccount=true | % {'{'}net user $_.name “PASSWORD”{'}'}

                c.	Active Directory - ONLY DC DO THIS - also probaly will work

                $NewPassword = (Read-Host -Prompt "Type the password" -AsSecureString)
                Get-ADUser -Filter * | Set-ADAccountPassword -reset -NewPassword $NewPassword
                gwmi -className win32_useraccount | % {'{'}net user $_.name "PASSWORD"{'}'}

                Change Domain Account Passwords (PowerShell):
                Get-ADUser -Filter * | Set-ADAccountPassword -Reset -NewPassword (Read-Host -AsSecureString -Force)

                Change Single Domain Account Password (PowerShell):
                Set-ADAccountPassword -Identity USERNAME -Reset -NewPassword (ConvertTo-SecureString -AsPlainText “PASSWORD -Force)

                Report for Local User Password Changes (Powershell)
                gwmi -className win32_useraccount | % {'{'}$_.name+”:PASSWORD”{'}'} | Out-File users.txt

                Report for AD Password Changes (Powershell)
                $users = Get-ADUser -filter *; $results = foreach ($u in $users) {'{'} $u.SamAccountName + ":PASSWORD"{'}'}; $results | Out-File adusers.txt

                Backup For Changing Local Account Passwords (PowerShell):
                foreach ($x in (Get-wmiobject -className win32_useraccount -filter localaccount=true | select-object name)){'{'} net user $x.name “PASSWORD” {'}'}
                Account management
                6.	Disable unneeded user accounts
                    <div>	Local Accounts</div>
                    i.	Start -{'>'}Computer Management -{'>'}Local users and Groups  -{'>'}Users
                7.	Lusrmger.msc
                    <div>	Localusermanager.msc</div>
                8.	Check administrators
                <div>	Shift + click to select tons of users</div>
                9.	Check Remote Desktop Users
                10.	Get-LocalUser | %{'{'}net user $_.name Password2@{'}'}
                i.	Right-click and disable any unnecessary accounts
                <div>	AD Accounts</div>
                i.	Start -{'>'}Active Directory Users and Computers
                ii.	Expand the tree and find all OUs and Containers for users
                iii.	Note: users might be in places they're not supposed to be
                c.	Make sure accounts are in the correct groups
                i.	Local Accounts
                1.	Start -{'>'}Computer Management -{'>'}Local users and Groups  -{'>'}Groups
                2.	Check groups and remove anyone who doesn't need to be there
                3.	Especially check “Administrators”
                ii.	AD Accounts
                1.	Start -{'>'}Active Directory Users and Computers
                2.	Move users from places they're not supposed to be to places they are supposed to be
                11.	Rename built-in admin account
                <div>Start -{'>'}Computer Management -{'>'}Local users and Groups  -{'>'}Users</div>
                <div>	Right-click and rename Administrator</div>
            </div>

        <div>
            <h1>Services</h1>
            <div>
                Get Windows Version
                Winver 

                SMB
                Windows 8.1, Windows 10, Windows 2012 R2, and Windows Server 2016, 2019
                Check: Get-WindowsOptionalFeature -Online -FeatureName SMB1Protocol
                Disable: Disable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol

                Windows 8 and Windows Server 2012, 2012 R2
                Check: Get-SmbServerConfiguration | Select EnableSMB1Protocol
                Disable: Set-SmbServerConfiguration -EnableSMB1Protocol $false

                Enable SMB V2
                Check: Get-SmbServerConfiguration | Select EnableSMB2Protocol
                Enable: Set-SmbServerConfiguration -EnableSMB2Protocol $true

                Windows 7, Windows Server 2008 R2, Windows Vista, and Windows Server 2008
                Disable SMBv1
                Check: Get-Item HKLM:\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters | ForEach-Object {'{'}Get-ItemProperty $_.pspath{'}'}

                Disable: Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters" SMB1 -Type DWORD -Value 0 -Force

                Enable V2
                Detect: Get-ItemProperty HKLM:\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters | ForEach-Object {'{'}Get-ItemProperty $_.pspath{'}'}

                Enable: Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters" SMB2 -Type DWORD -Value 1 -Force

                12.	Check sharing permissions
                <div>	Open a shell (Powershell or cmd)</div>
                <div>	Type “net share”</div>

                13.	Check external facing services
                <div>	Visit your own hosted services and make sure you aren't exposing any critical information - especially web servers</div>
                <div>	Run netstat, make sure you don't have any unneeded ports open</div>

                14.	Check Startup Programs
            </div>
        </div>

        <div>
            <h3>Software</h3>
            <div>            
                15.	Patch Critical Vulnerabilities
                <div>	For XP, 2000 and 2003 patch MS08_067</div>
                <div>	For Vista and 2008 patch </div>
                i.	MS09_050 - https://learn.microsoft.com/en-us/security-updates/SecurityBulletins/2009/ms09-050
                c.	For Windows Server 2012, 2016, Windows 7, 8, 10
                i.	Eternal Blue and BlueKeep
                d.	Server Windows XP, 2003, 2008
                i.	Critical patch: MS08_067 - https://learn.microsoft.com/en-us/security-updates/SecurityBulletins/2008/ms08-067
            </div>    
        </div>


            <h1>Monitoring</h1>
            <div>
                netstat -noab 1   
                    show all processes that have connections and 1 loops it
                taskkill -F /pid (process ID)            
            </div>

            <h1>Active Directory</h1>
            <p>
                16.	Set Policies  - Active Directory - Add Group Policy Object MMC - Only for DCs
                <div>	XPassword Policies</div>
                i.	Min Length - 14
                ii.	Enforce Password history - min 3
                iii.	maximum age - {'>'} 3 days
                iv.	min age - none
                v.	must meet complexity requirements - yes/enabled
                vi.	reversible encryption - SHOULD BE SET TO DISABLED
                vii.	Turn on DEP - bcdedit.exe /set {'{'}current{'}'} nx AlwaysOn
                <div>	Audit Policies</div>
                c.	Security Policies
                d.	Warning Messages
                e.	Change Services
                f.	Turn on DEP bcdedit.exe /set {'{'}current{'}'} nx AlwaysOng.
                    Disable Remote Desktop
                17.	Add/Remove Windows Components
                <div>	Turn off/remove Powershell         </div>
                Password Policy & Account Lockout (GPO - Default Domain Policy)
                Computer Configuration {'>'}Policies {'>'}Windows Settings {'>'}Security Settings {'>'}Account Policies
                    Be careful with lockout policies. Red teams can DoS admin accounts.
            </p>

            <h3>Third Party Tools</h3>
            <div>
                18.	Download tools (and place them in a shared folder)
                <div>	Comodo Cleaning Essentials</div>
                i.	http://bit.ly/2FAyftZ 
                <div>	Sysinternals</div>
                i.	Autoruns
                ii.	TCPView
                c.	Microsoft Baseline Security Analyser
                d.	MalwareBytes
                i.	http://bit.ly/2HSL7NB 
                e.	EMET 5.5.2
                f.	Sysinternals
                i.	Autoruns
                ii.	TCPView
                g.	MBAM
                h.	EMET 5.5.2
                i.	Install Microsoft Security Essentials on Server 2012
                j.	Change .exe compatibility to Windows 7
                k.	mseinstall.exe /disableoslimit
                19.	Remove unwanted viruses and software
                <div>	Also check Add/Remove Programs</div>
                <div>	Remove unneeded Windows components</div>
                c.	Run MBAM
                d.	Check Task Manager
                e.	Check msconfig
                f.	Check “C:\Windows\Temp”
            </div>

        Enable AD Powershell Module
        Import-Module ActiveDirectory

            <div>Common Injects</div>
            <div>
                <div>Logon Message (GPO)</div>
                Computer Configuration {'>'}Policies {'>'}Windows Settings {'>'}Security Settings {'>'}Local Policies {'>'}Security Options {'>'}Interactive Logon
            </div>

            <div>Backups</div>
            <div>
                21.	Make Backups of all critical services
                22.	Make Backups of all critical services
                <div>	DNS Right Click Zone, Change to store locally, not in AD, copy, change back to store in AD. File is Located in C:\Windows\System32\dns</div>
                dnscmd zonename /zoneexport Zone.com backup\zone1.com.dns.bak
                Export-DnsServerZone -Name _msdcs.ccdc.lan -FileName _msdcs.ccdc.lan.bkp
                <div>	Web</div>
                c.	FTP

                Backup DNS
                Powershell as Admin. These files are stored in C:\Windows\System32\dns. Copy them somewhere else!
                Export-DnsServerZone -Name ccdc.lan -FileName ccdc.lan.bkp
                Export-DnsServerZone -Name _msdcs.ccdc.lan -FileName _msdcs.ccdc.lan.bkp

                Restore DNS
                Copy DNS file to C:\Windows\System32\dns\ccdc.lan.dns
                Create New Zone {'>'}Primary Zone {'>'}ccdc.lan {'>'}Use existing file {'>'}ccdc.lan.dns {'>'}Do not allow dynamic updates {'>'}Finish {'>'}Right-Click new zone {'>'}Properties {'>'}Change type {'>'}Make sure it is Primary Zone & check Store zone in AD {'>'}Change Dynamic updates to Secure Only
            </div>
        On domain ccdc.lan:
        dsquery user ou=Users,dc=ccdc,dc=lan | dsmod user -pwd RedTeamSucks! -mustchpwd (user must change password) yes

        Regedit: HKEY_LOCAL_MACHINE{'->'}SOFTWARE{'->'}Policies{'->'}Microsoft{'->'}Windows Firewall{'->'}FirewallRules

        SYSTEM\CurrentControlSet\Services\SharedAccess\Parameters\FirewallPolicy\FirewallRules

        Dsquery user -name * | dsmod user -pwd Password1!

        Local Accounts:
        foreach ($x in (Get-wmiobject -className win32_useraccount -filter “localaccount='true'” | select-object name)){'{'} net user $x.name “PASSWORD” {'}'}

        Regedit: HKEY_LOCAL_MACHINE{'->'}SOFTWARE{'->'}Policies{'->'}Microsoft{'->'}Windows Firewall{'->'}FirewallRules

        SYSTEM\CurrentControlSet\Services\SharedAccess\Parameters\FirewallPolicy\FirewallRules

        Install Gui: Add-WindowsFeature Server-Gui-Shell, Server-Gui-Mgmt-Infra\

        ON powershell {'>'}V2.0
        Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters" SMB1 -Type DWORD -Value 0 -Force

        </div>       
    </div>

</div>
    );
};
export default WindowsChecklist;

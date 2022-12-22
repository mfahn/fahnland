import React from 'react';

function WindowsChecklist(){
    return(
        <div>
            <div>Windows Checklist</div>

            <div>FW</div>
            <div>netsh advfirewall set allprofiles firewallpolicy allowinbound,blockoutbound</div>
            <div>
                1.	Turn on Windows Firewall
                a.	Start Menu -{'>'}Windows Defender Firewall with Advanced Security
                b.	Click “Windows Defender Firewall Properties” in the center pane
                c.	Ensure that Domain, Public, and Private Profiles are enabled
                2.	After DC disables Group Firewalls run gpupdate /force on each machine
                a.	For clients:
                i.	Open a shell (Powershell or cmd)
                ii.	Type “gpupdate /force”
                b.	For DC:
                i.	On domain controller, open “Group Policy Management”
                ii.	Expand the tree on the side until you see “Group Policy Objects.”
                iii.	In Group Policy Objects, find one called “Firewall” or something similar
                iv.	Disable it by going to “Details” on the top bar and changing “GPO Status”  to “All settings disabled”
                3.	Configure Firewall Properly for each separate box - Inbound AND Outbound
                a.	Start Menu -{'>'}Windows Defender Firewall with Advanced Security
                b.	Multiple consecutive rules can be enabled/disabled at once by holding shift and selecting the outermost rules

                4.	Windows Firewall (GPO)
                a.	Gpmc.msc 
                5.	Computer Configuration {'>'}Policies {'>'}Windows Settings {'>'}Security Settings {'>'}Windows Defender Firewall
            </div>

            <div>Passwords</div>
            <div>
                Set passwords for all user accounts
                a.	Open a shell (ONLY Powershell)
                b.	Local - Type as follows - probably will work
                $password = Read-Host -AsSecureString
                Get-LocalUser * | Set-LocalUser -Password $password -Confirm

                Change Local Account Passwords (PowerShell as ADMIN):
                gwmi -class win32_useraccount -filter localaccount=true | % {'{'}net user $_.name “PASSWORD”{'}'}

                c.	Active Directory - ONLY DC DO THIS - also probaly will work

                $NewPassword = (Read-Host -Prompt "Type the password" -AsSecureString)
                Get-ADUser -Filter * | Set-ADAccountPassword -reset -NewPassword $NewPassword
                gwmi -class win32_useraccount | % {'{'}net user $_.name "PASSWORD"{'}'}

                Change Domain Account Passwords (PowerShell):
                Get-ADUser -Filter * | Set-ADAccountPassword -Reset -NewPassword (Read-Host -AsSecureString -Force)

                Change Single Domain Account Password (PowerShell):
                Set-ADAccountPassword -Identity USERNAME -Reset -NewPassword (ConvertTo-SecureString -AsPlainText “PASSWORD -Force)

                Report for Local User Password Changes (Powershell)
                gwmi -class win32_useraccount | % {'{'}$_.name+”:PASSWORD”{'}'} | Out-File users.txt

                Report for AD Password Changes (Powershell)
                $users = Get-ADUser -filter *; $results = foreach ($u in $users) {'{'} $u.SamAccountName + ":PASSWORD"{'}'}; $results | Out-File adusers.txt

                Backup For Changing Local Account Passwords (PowerShell):
                foreach ($x in (Get-wmiobject -class win32_useraccount -filter localaccount=true | select-object name)){'{'} net user $x.name “PASSWORD” {'}'}
                Account management
                6.	Disable unneeded user accounts
                a.	Local Accounts
                i.	Start -{'>'}Computer Management -{'>'}Local users and Groups  -{'>'}Users
                7.	Lusrmger.msc
                a.	Localusermanager.msc
                8.	Check administrators
                a.	Shift + click to select tons of users
                9.	Check Remote Desktop Users
                10.	Get-LocalUser | %{'{'}net user $_.name Password2@{'}'}
                i.	Right-click and disable any unnecessary accounts
                b.	AD Accounts
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
                a.	Start -{'>'}Computer Management -{'>'}Local users and Groups  -{'>'}Users
                b.	Right-click and rename Administrator
            </div>

            <div>Services</div>
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
                a.	Open a shell (Powershell or cmd)
                b.	Type “net share”

                13.	Check external facing services
                a.	Visit your own hosted services and make sure you aren't exposing any critical information - especially web servers
                b.	Run netstat, make sure you don't have any unneeded ports open

                14.	Check Startup Programs
            </div>

                <div>Software</div>
                <div>            
                    15.	Patch Critical Vulnerabilities
                    a.	For XP, 2000 and 2003 patch MS08_067
                    b.	For Vista and 2008 patch 
                    i.	MS09_050 - https://learn.microsoft.com/en-us/security-updates/SecurityBulletins/2009/ms09-050
                    c.	For Windows Server 2012, 2016, Windows 7, 8, 10
                    i.	Eternal Blue and BlueKeep
                    d.	Server Windows XP, 2003, 2008
                    i.	Critical patch: MS08_067 - https://learn.microsoft.com/en-us/security-updates/SecurityBulletins/2008/ms08-067
                </div>

            <div>Monitoring</div>
            <div>
                netstat -noab 1   
                    show all processes that have connections and 1 loops it
                taskkill -F /pid (process ID)            
            </div>

            <div>Active Directory</div>
            <div>
                16.	Set Policies  - Active Directory - Add Group Policy Object MMC - Only for DCs
                a.	XPassword Policies
                i.	Min Length - 14
                ii.	Enforce Password history - min 3
                iii.	maximum age - {'>'} 3 days
                iv.	min age - none
                v.	must meet complexity requirements - yes/enabled
                vi.	reversible encryption - SHOULD BE SET TO DISABLED
                vii.	Turn on DEP - bcdedit.exe /set {'{'}current{'}'} nx AlwaysOn
                b.	Audit Policies
                c.	Security Policies
                d.	Warning Messages
                e.	Change Services
                f.	Turn on DEP bcdedit.exe /set {'{'}current{'}'} nx AlwaysOng.
                    Disable Remote Desktop
                17.	Add/Remove Windows Components
                a.	Turn off/remove Powershell         
                Password Policy & Account Lockout (GPO - Default Domain Policy)
                Computer Configuration {'>'}Policies {'>'}Windows Settings {'>'}Security Settings {'>'}Account Policies
                    Be careful with lockout policies. Red teams can DoS admin accounts.
            </div>

            <div>Third Party Tools</div>
            <div>
                18.	Download tools (and place them in a shared folder)
                a.	Comodo Cleaning Essentials
                i.	http://bit.ly/2FAyftZ 
                b.	Sysinternals
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
                a.	Also check Add/Remove Programs
                b.	Remove unneeded Windows components
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
            a.	DNS Right Click Zone, Change to store locally, not in AD, copy, change back to store in AD. File is Located in C:\Windows\System32\dns
            dnscmd zonename /zoneexport Zone.com backup\zone1.com.dns.bak
            Export-DnsServerZone -Name _msdcs.ccdc.lan -FileName _msdcs.ccdc.lan.bkp
            b.	Web
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
    foreach ($x in (Get-wmiobject -class win32_useraccount -filter “localaccount='true'” | select-object name)){'{'} net user $x.name “PASSWORD” {'}'}

    Regedit: HKEY_LOCAL_MACHINE{'->'}SOFTWARE{'->'}Policies{'->'}Microsoft{'->'}Windows Firewall{'->'}FirewallRules

    SYSTEM\CurrentControlSet\Services\SharedAccess\Parameters\FirewallPolicy\FirewallRules

    Install Gui: Add-WindowsFeature Server-Gui-Shell, Server-Gui-Mgmt-Infra\

    ON powershell {'>'}V2.0
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters" SMB1 -Type DWORD -Value 0 -Force

    </div>
    );
};
export default WindowsChecklist;

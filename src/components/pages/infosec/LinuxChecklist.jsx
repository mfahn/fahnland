import React from 'react';

function LinuxChecklist(){
    return(
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
    <div className="lg:w-4/5 sm:w-7/8 mr-auto ml-auto">
    <div>
        <h1 className="font-bold text-center">Linux Checklist</h1>
    </div>
    <div className="m-auto pt-5 text-dark bg-bg-gray rounded-lg text-center dark:text-bg-gray dark:bg-navy">
        <p>In Collegiate Cyber Defense Competitions (CCDC), a team of defenders must protect a network from the intrusions of an active red team. They must simultaneously secure their systems and keep scored services like websites and databases online. During the competition, simulated employers will bring business tasks to the team of defenders who must carry out the business instructions. This is a generic *nix Checklist to guide those defensive efforts.
        </p>

        <h1 className="text-lg font-bold">Capture Initial State of the Machine</h1>
        <ol>
            <li className="text-left">ps -auxf {'>'} /root/ps.list</li>
            <li>lsmod {'>'} mod.list</li>
            <li>cat /etc/passwd {'>'} users.list</li>
        </ol>

        <h1 className="text-lg font-bold">Handle Root</h1>
        <p>Root is the most powerful basic user on a Linux computer and needs to be secured as soon as possible to prevent attackers from abusing its privileges</p>
        <p>passwd</p>
        <p>Change root password</p>
        <p>Restrict sudoers (sudo nano /etc/sudoers)</p>
        <p>Remove all but (root ALL=(ALL:ALL)) ALL), keep Defaults (for now)</p>
        Remove #includes
        <p>Change System Passwords (write as script & delete pass from script after use)</p>
        <p>    #!/bin/sh
            read -p : pass
        users=$(getent passwd | grep -v root | cut -d ":" -f 1)
        for user in $users; do
        echo “$user:$pass” | chpasswd
        echo “$user,$pass” {'>>'} {'<'}pwListName{'>'}.csv
        done
        </p>
        <h1>Users</h1>
        <ol>
            <li>Remove authentication backdoors</li>
            <li>Check sudoers file (sudo visudo) and /etc/sudoers.d (remove #include)</li>
            <li>Check pam_exec, malicious pam rules</li>
            <li>Check user status (passwd -Sa), ensure all system accounts are locked</li>
            <li>Lock root account (passwd -l root)</li>
            <li>Audit users (use GUI, and getent passwd)</li>
            <li>Ensure /etc/passwd has no hidden or UID 0 users, and no system /bin/.*sh shells</li>
            <li>Secure groups.</li>
            <li>Check /etc/group, especially sudo (getent group sudo) and nopasswdlogin</li>
        </ol>
        <h1>Backdoors and Persistence</h1>
        <ol>
            <li>Disable cron or any system scheduling service</li>
            <li>systemctl mask cron; systemctl stop cron</li>
            <li>Remove unnecessary timers and running services</li>
            <li>systemctl list-timers; systemctl list-units -t service</li>
            <li>Check for malicious alias commands (alias -p)</li>
            <li>Check /var/spool/cron/crontabs for individual tabs and /etc/cron* for new scripts</li>
            <li>Check listening and established connections (sudo ss -plunt)</li>
            <li>Check process list (ps auxf) especially by root (| grep root)</li>  
        </ol>


        <h1>Local Backup</h1>
        <ol>
            <li>mkdir /root/bak</li>
            <li>cp -r /etc /root/bak</li>
            <li>cp -r /home /root/bak</li>
            <li>Copy any other directories required by your services (see application checklists)</li>
        </ol>

        <h1>Change Application Passwords (see application checklists)</h1>
        Firewall
        <p>
            #!/bin/sh
            # Common
            alias add=”iptables -A”
            alias acc=”-j ACCEPT”
            iptables -P INPUT ACCEPT
            iptables -P OUTPUT ACCEPT

            iptables -F
            iptables -X
            add INPUT -i lo acc
            add OUTPUT -o lo acc
            add INPUT -m state --state RELATED,ESTABLISHED acc
            add OUTPUT -m state --state RELATED,ESTABLISHED acc

            add INPUT -p tcp --dport 22 -s {'<'}control computer{'>'} acc
            iptables -P FORWARD DROP     
        </p>

        <p>
            #!/bin/sh
            for line in $(cat fwgroups); do
                port=$(echo $line | cut -d “:” -f 1)
                host=$(echo $line | cut -d “:” -f 2)
                pdsh -R ssh -w 192.168.1.[$host] iptables -A INPUT -p tcp --dport $port
            done
            pdsh -R ssh -w 192.168.1.[1-255] iptables -P INPUT DROP            
        </p>

        <h1>SSH</h1>
        <p>/etc/ssh/sshd_config</p>
        <ol>
            <li>PermitRootLogin no</li>
            <li>PermitEmptyPasswords no</li>
            <li>PubkeyAuthentication no</li>
            <li>PasswordAuthentication no # undo if ssh shows as down</li>
            <li>PermitUserEnvironment no</li>
            <li>PrintLastLog no</li>
            <li>Protocol 2</li>
            <li>LogLevel VERBOSE</li>
            <li>X11Forwarding no</li>
            <li>AllowTcpForwarding no</li>
            <li>MaxAuthTries 4</li>
            <li>MaxStartups 2</li>
            <li>IgnoreRhosts yes</li>
            <li>HostbasedAuthentication no</li>
            <li>ClientAliveInterval 300</li>
            <li>ClientAliveCountMax 0</li>
            <li>LoginGraceTime 60</li>
            <li>StrictModes yes</li>
            <li>Banner /etc/issue.net</li>
            <li>AuthorizedKeysFile %h/.ssh/authorized_keys</li>            
        </ol>


        <p>
            HostKey /etc/ssh/ssh_host_rsa_key
            HostKey /etc/ssh/ssh_host_dsa_key
            HostKey /etc/ssh/ssh_host_ecdsa_key
            HostKey /etc/ssh/ssh_host_ed25519_key
            UsePrivilegeSeparation yes

            KeyRegenerationInterval 3600
            ServerKeyBits 1024

            SyslogFacility AUTH
            LogLevel INFO

            LoginGraceTime 120
            PermitRootLogin no
            StrictModes yes
            MaxAuthTries 3

            RSAAuthentication yes
            # if positive that public keys are not needed, set to no
            PubkeyAuthentication yes

            IgnoreRhosts yes
            RhostsRSAAuthentication no
            HostbasedAuthentication no

            PermitEmptyPasswords no

            ChallengeResponseAuthentication no

            PasswordAuthentication yes

            X11Forwarding no
            X11DisplayOffset 10
            PrintMotd no
            PrintLastLog yes
            TCPKeepAlive yes

            AcceptEnv LANG LC_*

            Subsystem sftp /usr/lib/openssh/sftp-server

            UsePAM yes
        </p>
        <li>Disable SSH Keys or just SSH</li>
            Edit /etc/ssh/sshd_config, set authorized keys to no
        <li>Could also allow only specific users.</li>
            Edit /etc/ssh/sshd_config, add “AllowUsers root@10.1.0.0/24”, allows only root to log in from the 10.1.0.0 subnet
        10. Backup Again (Local + Remote)
        <li>Firewall: Allow out to backup server on SSH</li>
        <li>Copy backups to backup server via SSH (scp/sftp)</li>
        11. Check scheduled tasks
        <li>Remove cronjobs</li>
            mkdir /root/cron/
            mv /etc/cron* /root/cron/
            mv /var/spool/cron* /root/cron/
        <li>Check but don't remove: /etc/rc.local</li>
        <li>Check /etc/init.d/, /etc/systemd/ (keep track: ls -r /etc/init.d/ {'>'} initd.orig)</li>
        12. Remove tools red team will use against you
        <li>netcat, wget, curl, python</li>
        13. Upgrade kernel (restart system) ← If you have time, probably not necessary
        14. Install updates for entire system
        <li>Switch Terminals (ALT+F3)</li>
        <li>Sudo apt upgrade && sudo apt upgrade -y && sudo apt autoremove -y</li>

        Files
        <li>Check malicious binaries and files (sudo debsums_init && debsums -ac)</li>
        <li>Check /home (find /home -mindepth 2 -maxdepth 2 -not -empty -type d | grep -Fv "/.")</li>
        <li>Check for mp3s and other files globally (find / -iname "*.mp3")</li>
        <li>Set important file permissions</li>
        <li>chmod 0644 /etc/passwd /etc/passwd- /etc/group /etc/group- /etc/fstab</li>
        <li>chmod 0640 /etc/shadow /etc/shadow- /etc/gshadow /etc/gshadow-</li>
        <li>chown root:root /etc/fstab /etc/passwd /etc/shadow /etc/group /var/spool/cron</li>
        <li>Check for writable NFS (exportfs)</li>
        <li>Check for SUID and SGID binaries (sudo find / -xdev -user root \( -perm -4000 -o -perm -2000 \))</li>
        Software
        <li>Remove "hacking tools" and programs that increase your vulnerability</li>
        <li>Hacking tools: hydra netcat john aircrack-ng nikto medusa nmap ophcrack dsniff cain kismet knocker p0f</li>
        <li>Games: Minetest openarena freeciv brainiac</li>
        <li>Services: cups isc-dhcp-server slapd nfs-server rpcbind bind9 vsftpd pure-ftpd apache2 nginx dovecot smbd squid snmpd tigervnc tightvnc vino-viewer named ircd-irc2 </li>nis talk
        <li>Upgrade the whole system: sudo apt full-upgrade && sudo apt autoremove</li>
        <li>Ensure that some packages aren't held</li>
        <li>dpkg --get-selections | grep "hold"; sudo apt-mark unhold {'<'}package{'>'}</li>
        Service Hardening
        apache

        /etc/apache2/apache2.conf 
        <li>Options None (or -Indexes)</li>
        <li>FileETag None</li>
        <li>AllowOverride None (root level directive)</li>

        /etc/apache2/conf-enabled/security.conf
        <li>ServerSignature Off</li>
        <li>ServerTokens Prod</li>
        <li>TraceEnable Off</li>

        /etc/apache2/envvars
        <li>export APACHE_RUN_USER=www-data</li>
        <li>export APACHE_RUN_GROUP=www-data</li>

        webapps
        <li>Change user passwords in application (localhost/wp-admin, /administrator, /user)!</li>
        <li>Change application database config password (in web app directory)</li>
        <li>For example, configuration.php, wp-config.php.</li>
        <li>Delete old and unused plugins and themes (or update them).</li>
        <li>Update application (Reports → Available Updates)</li>
        <li>Look for shells and check important files especially</li>
        <li>grep -Erw --include="*.php" "shell_exec" (also check with exec passthru proc_open popen system)</li>
        php
        /etc/apache2/php.ini or locate php.ini or search C:\ for php.ini

        display_errors = off
        short_open_tag = off
        disable_functions = shell_exec, exec, passthru, proc_open, popen, system, phpinfo
        max_execution_time = 3
        register_globals = off
        magic_quotes_gpc = on
        allow_url_fopen = off
        allow_url_include = off
        session.cookie_httponly = 1
        session.use_only_cookies = 1
        session.cookie_secure = 1
        session.hash_function = whirlpool

        External
        <li>Check for existing keys and delete them (unless specified otherwise) (~/.ssh/)</li>
        <li>Install fail2ban</li>
        mysql
        /etc/mysql/my.cnf (or locate my.cnf)
        <li>[mysqld]</li>
        <li>local-infile=0</li>
        <li>bind-address=127.0.0.1 # if standalone</li>
        <li>bind-address = 0.0.0.0 # then firewall, if multiple images</li>
        <li>skip-show-database # removes show databases command</li>

        User Security (MySQL CLI)
        <li>Change root password and don't use root account. Delete bad users.</li>
        <li>Use mysql database: USE mysql</li>
        <li>Show users: SELECT host, user FROM user;</li>
        <li>Change password: alter user 'root'@'localhost' identified by 'newpass';</li>
        <li>Remove user: DROP USER 'username'@'host';</li>
        <li>FLUSH PRIVILEGES;</li>
        <li>Look up the Digital Ocean guide… Just keep your firewall blocking it and bind to 0.0.0.0.</li>
        Monitoring
        Logins
        <li>w</li>
        <li>shows currently logged in users</li>
        <li>lastlogin</li>
        <li>shows the last time each user logged into a system</li>
        <li>tail /var/log/auth.log</li>
        <li>shows the last login</li>
        Connections
        <li>netstat -antop</li>
        <li>shows active connections</li>
        Processes
        <li>ps -auxf</li>
        <li>shows all processes with which user initiated them</li>
        <li>can stop malicious processes by using </li>
        <li>sudo kill -p pid</li>

        <li>lsof -nPi, ps faux, top</li>
        <li>ps aux -{'>'} diff with initial state (same with lsmod)</li>
        <li>Check running processes belong to a package</li>
        <li>auditd session logging / script session logging (see Guides)</li>
        <li>debsums, rpm -Va</li>

    </div>
    </div>

</div>
    );
}
export default LinuxChecklist

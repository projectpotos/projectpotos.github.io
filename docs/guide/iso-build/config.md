---
next: { link: "../specs-repo/overview.md", text: "Specs Repository"}
---
# ISO build config

For your iso build you need a config directory to mount as volume. 

## logo.png
Place your client logo in this file, if you want some customization during the setup dialogs
If no such file is available, by default the Potos Logo is used.

<img src="/logo.png" title="Potos Logo" style="max-width:250px" />

## config.yml
The iso build is configured using [YAML](https://en.wikipedia.org/wiki/YAML) based `config.yml` file. The file has to be located within the configuration directory mounted as volume into the build container.

::: warning CONVENTION
The *dot-notation* of a config-key like `client_name.long` means `long` property within the `client_name` section. All *dot-notation* references are absolut.
:::

| Variable | Type | Default | Comment |
|---|---|---|---|
| client_name.long | *string* | Potos Linux Client | Define the Name of your Linux Client, e.g. "My Linux Client". |
| client_name.short | *string, lowercase, short, regex `^([0-9a-z]{1,32})$`* | potos | Define a short name of your Linux Client. Use lowercase. Will be used for example for the log folder /var/log/$POTOS_CLIENT_SHORTNAME |
| disk_encryption.enable | *boolean --> `true`\|`false`* | false | To enable autoinstall feature with disk encryption (except: /boot). You have to enter the defined password at first boot after the installation. |
| disk_encryption.init_password | *string* | install | The autoinstall feature with disk encryption (except: /boot) needs a predefined decryption password. You have to enter this password at first boot after the installation. |
| specs.url | *string, URL, trailing slash* | https://github.com/projectpotos/ | The URL to your Git Account that holds your own Potos Specs Repository. Make sure you have the trailing slash included. |
| specs.repo | *string, part of the URL* | ansible-specs-potos | The name of your own Potos Git Specs Repository, without *.git* at the End. |
| specs.branch | *string* | main | Define the branch of your specs.repo. Typical values are `main`, `master`, `develop` |
| initial_hostname | *string* | potoshostname01 | Your Linux Client based on Potos will use this predefined hostname at the installation and first boot. |
| initial_user.username | *string* | admin | An initial username is required. Will have full sudo (root) permission. Can be removed later on. |
| initial_user.password | *string* | admin *hashed* | The password in form of a hash. Create your own with `echo -n yourpasswordhere \| mkpasswd --method=SHA-512 --stdin` . |
| environment | *string* | production | Possible values are `production` and `develop`. The installation in `develop` mode is more verbose. |
| first_boot_ansible.runtype | *string* | setup | Run type of the first ansible run |
| full_unattended_install | *boolean --> `true`\|`false`* | false | Disable security question before overwrite of disk and user input from iso side to allow a fully unattended installation |
| input.iso_filename | *string* | ubuntu-22.04.1-live-server-amd64.iso | Name of the local iso file (needs to correspond with content of the SHA256SUMS file) |
| input.iso_url | *string* | https://releases.ubuntu.com/22.04/ubuntu-22.04.1-live-server-amd64.iso | Where to download the iso file if it doesn't exist locally |
| input.sha256_filename | *string* | SHA256SUMS | Name of the SHA256SUMS file |
| input.sha256_url | *string* | https://releases.ubuntu.com/22.04/SHA256SUMS | Where to download the SHA256SUMS file if it doesn't exist locally |
| output.version | *string* | current date in yyyymmddd | What string should be used as Version identifier |
| output.filename | *string* | `client_name.short`-installer-`environment`.iso | How the iso in the output directory should be named |
| preinstall_packages | *list of strings* | - python3-virtualenv<br> - linux-generic-hwe-22.04<br> - ubuntu-desktop<br> - plymouth-theme-ubuntu-logo<br> - ldap-utils<br> - yad | What packages should be installed with autoinstall. * `python3-virtualenv`: python with virtualenv is required to install ansible within it * `linux-generic-hwe-22.04`: install hwe kernel * `ubuntu-desktop`: install gnome desktop * `plymouth-theme-ubuntu-logo`: install plymouth-theme * `ldap-utils`: ldap utils used for all the ldap integration things * `yad`: used for graphical dialogs during setup |


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

#### client_name.long
**Type**: *string*, **Default**: `Potos Linux Client`

Define the Name of your Linux Client, e.g. "My Linux Client".

#### client_name.short
**Type**: *string, lowercase, short, regex `^([0-9a-z]{1,32})$`*, **Default**: `potos`

Define the short name of your Linux Client. Use lowercase. Will be used for example for the log folder `/var/log/$POTOS_CLIENT_SHORTNAME`

#### disk_encryption.enable
**Type**: *boolean --> `true`|`false`*, **Default**: `false`

To enable autoinstall feature with disk encryption (except: /boot). You have to enter the defined password at first boot after the installation.

#### disk_encryption.init_password
**Type**: *string*, **Default**: `install`

The autoinstall feature with disk encryption (except: /boot) needs a predefined decryption password. You have to enter this password at first boot after the installation.

#### specs.url
**Type**: *string, URL, trailing slash*, **Default**: `https://github.com/projectpotos/`

The URL to your Git Account that holds your own Potos Specs Repository. Make sure you have the trailing slash included.

#### specs.repo
**Type**: *string, part of the URL*, **Default**: `ansible-specs-potos`

The name of your own Potos Git Specs Repository, without *.git* at the End.

#### specs.branch
**Type**: *string*, **Default**: `main`

Define the branch of your specs.repo. Typical values are `main`, `master`, `develop`

#### specs.ssh_key
**Type**: *filename (string)*, **Default**: `*none*`

Defines in what file inside the config directory the private ssh deployment key is stored, to be used when pulling the specs repo. The key is stored on the machine under /etc/potos/specs_key with permissions 0400.

#### specs.ansible-vault-key-file
**Type**: *filename (string)*, **Default**: `*none*`

Defines in what file inside the config directory stores your ansible-vault key. This can be a script to be evaluated on runtime. If a file is given, it is stored under /etc/potos/ansible_vault_key with permission 0700 and should then be given to each ansible execution with the cli param `--vault-password-file=/etc/potos/ansible_vault_key`

#### initial_hostname
**Type**: *string*, **Default**: `potoshostname01`

Your Linux Client based on Potos will use this predefined hostname at the installation and first boot.

#### initial_user.username
**Type**: *string*, **Default**: `admin`

An initial username is required. Will have full sudo (root) permission. Can be removed later on.

#### initial_user.password
**Type**: *string*, **Default**: `admin` *hashed*

The password in form of a hash. Create your own with `echo -n yourpasswordhere | mkpasswd --method=SHA-512 --stdin` .

#### environment
**Type**: *string*, **Default**: `production`

Possible values are `production` and `develop`. The installation in `develop` mode is more verbose.

#### first_boot_ansible.runtype
**Type**: *string*, **Default**: `setup`

Run type of the first ansible run

#### full_unattended_install
**Type**: *boolean --> `true`|`false`*, **Default**: `false`

Disable both the security question before overwriting the disk and  the user input from iso side to allow a fully unattended installation

#### input.iso_filename
**Type**: *string*, **Default**: `ubuntu-22.04.1-live-server-amd64.iso`

Name of the local iso file (needs to correspond with content of the SHA256SUMS file)

#### input.iso_url
**Type**: *string*, **Default**: `https://releases.ubuntu.com/22.04/ubuntu-22.04.1-live-server-amd64.iso`

Where to download the iso file if it doesn't exist locally

#### input.sha256_filename
**Type**: *string*, **Default**: `SHA256SUMS`

Name of the SHA256SUMS file

#### input.sha256_url
**Type**: *string*, **Default**: `https://releases.ubuntu.com/22.04/SHA256SUMS`

Where to download the SHA256SUMS file if it doesn't exist locally

#### output.version
**Type**: *string*, **Default**: `current date in yyyymmddd`

What string should be used as Version identifier

#### output.iso_filename 
**Type**: *string*, **Default**: `` `client_name.short`-installer-`environment`.iso``

How the iso in the output directory should be named

#### preinstall_packages
**Type**: *list of strings*, **Default**: 
```yaml
 - python3-virtualenv
 - linux-generic-hwe-22.04
 - ubuntu-desktop
 - plymouth-theme-ubuntu-log
 - ldap-utils
 - yad
 ```
 
 What packages should be installed with autoinstall. 
 * `python3-virtualenv`: python with virtualenv is required to install ansible within it 
 * `linux-generic-hwe-22.04`: install hwe kernel 
 * `ubuntu-desktop`: install gnome desktop 
 * `plymouth-theme-ubuntu-logo`: install plymouth-theme 
 * `ldap-utils`: ldap utils used for all the ldap integration things 
 * `yad`: used for graphical dialogs during setup


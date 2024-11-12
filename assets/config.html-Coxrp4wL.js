import{_ as n,r as a,o as i,c as r,a as o,b as e,d,e as t}from"./app-htrVjLpi.js";const c="/logo.png",l={},h=t('<h1 id="iso-build-config" tabindex="-1"><a class="header-anchor" href="#iso-build-config" aria-hidden="true">#</a> ISO build config</h1><p>For your iso build you need a config directory to mount as volume.</p><h2 id="logo-png" tabindex="-1"><a class="header-anchor" href="#logo-png" aria-hidden="true">#</a> logo.png</h2><p>Place your client logo in this file, if you want some customization during the setup dialogs If no such file is available, by default the Potos Logo is used.</p><img src="'+c+'" title="Potos Logo" style="max-width:250px;"><h2 id="config-yml" tabindex="-1"><a class="header-anchor" href="#config-yml" aria-hidden="true">#</a> config.yml</h2>',6),p={href:"https://en.wikipedia.org/wiki/YAML",target:"_blank",rel:"noopener noreferrer"},u=o("code",null,"config.yml",-1),g=t('<div class="custom-container warning"><p class="custom-container-title">CONVENTION</p><p>The <em>dot-notation</em> of a config-key like <code>client_name.long</code> means <code>long</code> property within the <code>client_name</code> section. All <em>dot-notation</em> references are absolut.</p></div><div class="custom-container warning"><p class="custom-container-title">Breaking changes v1 to v2</p><ul><li>Rename <code>specs.ansible-vault-key-file</code> to <code>specs.ansible_vault_key_file</code> because Python doesn&#39;t allow <code>-</code> in variable names</li><li>Replace <code>input.iso_filename</code>, <code>input.iso_url</code>, <code>input.sha256_filename</code>, <code>input.sha256_url</code> used to specify the iso with the new variable <code>os</code> predefining them</li><li>Replace <code>preinstall_packages</code> with the new variable <code>os</code> predefining them</li></ul></div><h4 id="client-name-long" tabindex="-1"><a class="header-anchor" href="#client-name-long" aria-hidden="true">#</a> client_name.long</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>Potos Linux Client</code></p><p>Define the Name of your Linux Client, e.g. &quot;My Linux Client&quot;.</p><h4 id="client-name-short" tabindex="-1"><a class="header-anchor" href="#client-name-short" aria-hidden="true">#</a> client_name.short</h4><p><strong>Type</strong>: <em>string, lowercase, short, regex <code>^([0-9a-z]{1,32})$</code></em>, <strong>Default</strong>: <code>potos</code></p><p>Define the short name of your Linux Client. Use lowercase. Will be used for example for the log folder <code>/var/log/$POTOS_CLIENT_SHORTNAME</code></p><h4 id="disk-encryption-enable" tabindex="-1"><a class="header-anchor" href="#disk-encryption-enable" aria-hidden="true">#</a> disk_encryption.enable</h4><p><strong>Type</strong>: <em>boolean --&gt; <code>true</code>|<code>false</code></em>, <strong>Default</strong>: <code>false</code></p><p>To enable autoinstall feature with disk encryption (except: /boot). You have to enter the defined password at first boot after the installation.</p><h4 id="disk-encryption-init-password" tabindex="-1"><a class="header-anchor" href="#disk-encryption-init-password" aria-hidden="true">#</a> disk_encryption.init_password</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>install</code></p><p>The autoinstall feature with disk encryption (except: /boot) needs a predefined decryption password. You have to enter this password at first boot after the installation.</p><h4 id="specs-url" tabindex="-1"><a class="header-anchor" href="#specs-url" aria-hidden="true">#</a> specs.url</h4><p><strong>Type</strong>: <em>string, URL, trailing slash</em>, <strong>Default</strong>: <code>https://github.com/projectpotos</code></p><p>The URL to your Git Account that holds your own Potos Specs Repository.</p><p>When accessing the specs repo via ssh this must be in the format <code>git@github.com:projectpotos</code>.</p><h4 id="specs-repo" tabindex="-1"><a class="header-anchor" href="#specs-repo" aria-hidden="true">#</a> specs.repo</h4><p><strong>Type</strong>: <em>string, part of the URL</em>, <strong>Default</strong>: <code>ansible-specs-potos</code></p><p>The name of your own Potos Git Specs Repository, without <em>.git</em> at the End.</p><h4 id="specs-branch" tabindex="-1"><a class="header-anchor" href="#specs-branch" aria-hidden="true">#</a> specs.branch</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>main</code></p><p>Define the branch of your specs.repo. Typical values are <code>main</code>, <code>master</code>, <code>develop</code></p><h4 id="specs-ssh-key" tabindex="-1"><a class="header-anchor" href="#specs-ssh-key" aria-hidden="true">#</a> specs.ssh_key</h4><p><strong>Type</strong>: <em>filename (string)</em>, <strong>Default</strong>: <code>*none*</code></p><p>Defines in what file inside the config directory the private ssh deployment key is stored, to be used when pulling the specs repo. The key is stored on the machine under /etc/potos/specs_key with permissions 0400.</p><h4 id="specs-ansible-vault-key-file" tabindex="-1"><a class="header-anchor" href="#specs-ansible-vault-key-file" aria-hidden="true">#</a> specs.ansible_vault_key_file</h4><p><strong>Type</strong>: <em>filename (string)</em>, <strong>Default</strong>: <code>*none*</code></p><p>Defines in what file inside the config directory stores your ansible-vault key. This can be a script to be evaluated on runtime. If a file is given, it is stored under /etc/potos/ansible_vault_key with permission 0700 and should then be given to each ansible execution with the cli param <code>--vault-password-file=/etc/potos/ansible_vault_key</code></p><h4 id="initial-hostname" tabindex="-1"><a class="header-anchor" href="#initial-hostname" aria-hidden="true">#</a> initial_hostname</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>potoshostname01</code></p><p>Your Linux Client based on Potos will use this predefined hostname at the installation and first boot.</p><h4 id="initial-user-username" tabindex="-1"><a class="header-anchor" href="#initial-user-username" aria-hidden="true">#</a> initial_user.username</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>admin</code></p><p>An initial username is required. Will have full sudo (root) permission. Can be removed later on.</p><h4 id="initial-user-password" tabindex="-1"><a class="header-anchor" href="#initial-user-password" aria-hidden="true">#</a> initial_user.password</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>admin</code> <em>hashed</em></p><p>The password in form of a hash. Create your own with <code>echo -n yourpasswordhere | mkpasswd --method=SHA-512 --stdin</code> .</p><h4 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> environment</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>production</code></p><p>Possible values are <code>production</code> and <code>develop</code>. The installation in <code>develop</code> mode is more verbose.</p><h4 id="first-boot-ansible-runtype" tabindex="-1"><a class="header-anchor" href="#first-boot-ansible-runtype" aria-hidden="true">#</a> first_boot_ansible.runtype</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>setup</code></p><p>Run type of the first ansible run</p><h4 id="full-unattended-install" tabindex="-1"><a class="header-anchor" href="#full-unattended-install" aria-hidden="true">#</a> full_unattended_install</h4><p><strong>Type</strong>: <em>boolean --&gt; <code>true</code>|<code>false</code></em>, <strong>Default</strong>: <code>false</code></p><p>Disable both the security question before overwriting the disk and the user input from iso side to allow a fully unattended installation</p><h4 id="os" tabindex="-1"><a class="header-anchor" href="#os" aria-hidden="true">#</a> os</h4><p><strong>Type</strong>: *string&quot;, <strong>Default</strong>: <code>jammy</code></p><p>Selection of what operating system the iso should base on. Currently the following options are supported:</p><ul><li><code>jammy</code>: Ubuntu 22.04 LTS (Jammy)</li><li><code>focal</code>: Ubuntu 20.04 LTS (Focal)</li></ul><h4 id="output-version" tabindex="-1"><a class="header-anchor" href="#output-version" aria-hidden="true">#</a> output.version</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>%Y%m%d</code></p><p>What string should be used as Version identifier. Date variable substitution (e.g. <code>%Y</code> = 2023) is active on this variable.</p><h4 id="output-iso-filename" tabindex="-1"><a class="header-anchor" href="#output-iso-filename" aria-hidden="true">#</a> output.iso_filename</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code> `client_name.short`-installer-`environment`.iso</code></p><p>How the iso in the output directory should be named</p><h4 id="isolinux-txtbackgroundcolor" tabindex="-1"><a class="header-anchor" href="#isolinux-txtbackgroundcolor" aria-hidden="true">#</a> isolinux.txtBackgroundColor</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>0xCCCCCC</code></p><p>If you use a system with isoboot, you can define the text color of the not currently selected options</p><h4 id="isolinux-txtforegroundcolor" tabindex="-1"><a class="header-anchor" href="#isolinux-txtforegroundcolor" aria-hidden="true">#</a> isolinux.txtForegroundColor</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>0xFFFFFF</code></p><p>If you use a system with isoboot, you can define the text color of the currently selected options</p><h4 id="isolinux-screencolor" tabindex="-1"><a class="header-anchor" href="#isolinux-screencolor" aria-hidden="true">#</a> isolinux.screenColor</h4><p><strong>Type</strong>: <em>string</em>, <strong>Default</strong>: <code>0x161B21</code></p><p>If you use a system with isoboot, you can define the screen background color.</p><h2 id="access-pcx" tabindex="-1"><a class="header-anchor" href="#access-pcx" aria-hidden="true">#</a> access.pcx</h2><p>If you use a system with isoboot, you can insert your custom <code>access.pcx</code>. If such a system is used and no file is placed, a default Potos one is used.</p><h2 id="splash-pcx" tabindex="-1"><a class="header-anchor" href="#splash-pcx" aria-hidden="true">#</a> splash.pcx</h2><p>If you use a system with isoboot, you can insert your custom <code>splash.pcx</code>. If such a system is used and no file is placed, a default Potos one is used.</p>',71);function f(m,y){const s=a("ExternalLinkIcon");return i(),r("div",null,[h,o("p",null,[e("The iso build is configured using "),o("a",p,[e("YAML"),d(s)]),e(" based "),u,e(" file. The file has to be located within the configuration directory mounted as volume into the build container.")]),g])}const x=n(l,[["render",f],["__file","config.html.vue"]]);export{x as default};
# Potos roles

Here just a quick overview over the most important Ansible roles we have for potos. 

You can list all of them on [Github](https://github.com/search?q=org%3Aprojectpotos+ansible-role&type=repositories)

## [potos_basics](https://github.com/projectpotos/ansible-role-potos_basics)

This role contains basic features such as regular ansible pulls.

## [potos_evince](https://github.com/projectpotos/ansible-role-potos_evince)

This role installs evince (known as GNOME Document Viewer)

## [potos_firewall](https://github.com/projectpotos/ansible-role-potos_firewall)

This role configures the ufw firewall according to the specified variables

## [potos_firstboot](https://github.com/projectpotos/ansible-role-potos_firstboot)

This role implements a generic first boot wizard with YAD. 

::: warning
This role interupts the execution, ensure it is only run during the first boot, when the user can interact with it.
:::

## [potos_gnome_shortcut](https://github.com/projectpotos/ansible-role-potos_gnome_shortcut)

This role deploys a customizable gnome extension, creating a shortcut menu in the top bar.

## [potos_libreoffice](https://github.com/projectpotos/ansible-role-potos_libreoffice)

This role installs libreoffice and lets you define your corporate identity presets (fonts, templates, ...)

## [potos_template](https://github.com/projectpotos/ansible-role-potos_template)

This is not a real role, it is more a template based on which you can develop your own role. For more see [here](/guide/own-role/)

::: tip
Have a look at other roles on how things are done there e.g. [potos_wallpaper](#potos-wallpaper)
:::


## [potos_wallpaper](https://github.com/projectpotos/ansible-role-potos_wallpaper)

This role just sets the wallpapers on Gnome and also functions as an example role.

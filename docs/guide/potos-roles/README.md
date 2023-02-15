# Potos roles

Here just a quick overview over the most important Ansible roles we have for potos. 

You can list all of them on [Github](https://github.com/search?q=org%3Aprojectpotos+ansible-role)

## [potos_basics](https://github.com/projectpotos/ansible-role-potos_basics)

This role contains basic features such as regular ansible pulls.

## [potos_firstboot](https://github.com/projectpotos/ansible-role-potos_firstboot)

This role implements a generic first boot wizard with YAD. 

::: warning
This role interupts the execution, ensure it is only run during the first boot, when the user can interact with it.
:::

## [potos_template](https://github.com/projectpotos/ansible-role-potos_template)

This is not a real role, it is more a template based on which you can develop your own role. For more see [here](/guide/own-role/)

::: tip
Have a look at other roles on how things are done there e.g. [potos_wallpaper](#potos-wallpaper)
:::


## [potos_wallpaper](https://github.com/projectpotos/ansible-role-potos_wallpaper)

This role just sets the wallpapers on Gnome and also functions as an example role.

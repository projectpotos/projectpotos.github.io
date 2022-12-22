---
next: { link: "../own-role/ansible_basics.md", text: "Write your own Role"}
---
# Structure


A minimal structure example for a client with the [`potos_wallpaper`](https://github.com/projectpotos/ansible-role-potos_wallpaper) role, to have something to explain:

```
ansible-specs-potos
│   README.md
│   requirements.txt
│
└───files
│   └───potos_wallpaper
│   │   │   potos-vanilla.jpg
│   │
│   └───templates
│       │   requirements.yml.j2
└───molecule
│   └───default
│       │ converge.yml
│       │ molecule.yml
│       │ prepare.yml
│       │ verify.yml
│
└───templates
│   │   collections.yml.j2
│
└───vars
    │   potos_wallpaper.yml
```

## README.md

The README is just a normal git repository readme file, with no special function besides informing a viewer about the repos purpose.

## requirements.txt

The requirements.txt file defines the requirements to be loaded for the molecule testing (see [# molecule](#molecule))

## files/

All files from within this directory are straight copied into the [Potos Playbook](/guide/own-role/potos_playbook.html) directory.

## files/potos_wallpaper

This directory is specific to the [`potos_wallpaper`](https://github.com/projectpotos/ansible-role-potos_wallpaper) role. In this case it contains the background images to be deployed to the clients.

## files/templates

This is a special directory as files within this directory are available as templates to the playbook execution.

## files/template/requirements.yml.j2

This is a mandatory file for all Potos clients, as this file defines what role should be executed at which point in time.
It is basically just a [ansible-galaxy](https://galaxy.ansible.com/) requirements file getting templated specifically for this playbook run.

As an example
```yaml
---
{% if potos_runtype == 'setup' %}
- name: firstboot
  src: git+https://github.com/projectpotos/ansible-role-potos_firstboot
  version: 'main'
{% endif %}
- name: basics
  src: git+https://github.com/projectpotos/ansible-role-potos_basics.git
  version: 'main'

- name: wallpaper
  src: git+https://github.com/projectpotos/ansible-role-potos_wallpaper.git
  version: 'main'
```
Here the [`potos_firstboot`](https://github.com/projectpotos/ansible-role-potos_firstboot) role is executed just when the runtype is set as `setup`. In this case this means it is only executed once during the setup process.

The roles [`potos_basics`](https://github.com/projectpotos/ansible-role-potos_basics.git) and [`potos_wallpaper`](https://github.com/projectpotos/ansible-role-potos_wallpaper.git) are then executed each time.


## molecule/

This directory contains the Molecule testing. In the case of the example spec repository, we basically deploy a potos client onto a container. 

For more infos on Molecule see the Molecule testing in [writing your own role](/guide/own-role/molecule)

## templates/

This directory is basically the same as [`files`](#files), but with the difference that already when copying the files to the playbook location they are getting templated.

## templates/collections.yml.j2

This is a mandatory file for all Potos clients, as this file defines what additional [collections](https://docs.ansible.com/ansible/latest/collections_guide/index.html) should be installed before the playbook execution, to run all roles.
In most cases at some point you will probably need to add `ansible.posix` and `community.general` as they are widely used.

## vars/

In this directory you can place yaml files to override role variables and customize them for your client. All the files in this directory are available as host_vars during the Potos playbook execution.

## vars/potos_wallpaper.yml

This file is specific to the [`potos_wallpaper`](https://github.com/projectpotos/ansible-role-potos_wallpaper) role. It overwrites the variables from this role for this client.


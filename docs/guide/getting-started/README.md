# Getting Started

You want to tailor-make your own Linux client for you, your company or someone else? Potos can be your framework.

Here you will find some instructions on how to set up your own Linux client based on Potos. But the best way of getting to know Potos is simply by try it yourself. Don't be scared by the unknown territory :wink:

## Specs Repository
For your custom client you need your own "Specs" Repository. This repository defines all the basics of how your client will look.
It defines what [Ansible](https://en.wikipedia.org/wiki/Ansible_(software)) roles should be applied, in what frequence, and with what variables.

The only other source for some very limited parameters is with the iso image generation.

You can read everything about this "Specs" repository [here](/guide/specs-repo/overview).

## Iso Build
For the iso generation, the main thing you need is a [config directory](/guide/iso-build/config) with a [config.yml](/guide/iso-build/config.html#config-yml) file.
This file defines the most basic things for the iso, such as how the client should be named or where to look for the "Specs Repository".

## Sample Client build - Tutorial
### Unchanged Potos Vanilla Client
 1. Ensure you have `git`, `docker` and possibility to run a virtual machine (e.g. kvm, virtualbox, vmware, etc) installed
   ```bash
   git --version
   docker version
   ```
 2. Create a local work environment, e.g. `~/potosSampleClient`
   ```bash
   mkdir -p ~/potosSampleClient
   cd ~/potosSampleClient
   ```
 3. Clone the `potos-iso-builder` to get the scaffolding and change into this directory
   ```bash
   git clone https://github.com/projectpotos/potos-iso-builder.git
   cd potos-iso-builder
   ```
 4. In further tries at this step you would adjust the files in the `config`, but for this tutorial we leave everything at default
 5. Build the image by running
    ```bash
    docker run -it -v $(pwd)/config:/config -v $(pwd)/output:/output ghcr.io/projectpotos/potos-iso-builder:latest
    ```
    SELinux may prevent access to `config` and `output`. (`PermissionError: [Errno 13] Permission denied: '/config/config.yml'`.) Add `:z` to each mapped volume:
    ```bash
    docker run -it -v $(pwd)/config:/config:z -v $(pwd)/output:/output:z ghcr.io/projectpotos/potos-iso-builder:latest
    ```
 6. Create a new VM using the iso in the `output` directory
 7. Just follow the setup dialog on first boot
 8. Enjoy a Linux Client based on Ubuntu 22.04 LTS, with a potos wallpaper that is regularly enforced.
 ### Changing client
 9. As a next step you probably want your own Specs Repository for this you need
     1. Go to [github.com/projectpotos/ansible-specs-potos](https://github.com/projectpotos/ansible-specs-potos) and click on 
     `Use this template` > `Create a new repository` to create your own specs repository.
     2. Select where you want that repository.
     3. Adjust in `config/config.yml` the following values to your new location
        ```yaml
        specs:
          url: "https://github.com/projectpotos/"
          repo: "ansible-specs-potos"
          branch: "main"
        ```
     4. You may also want to adjust other values in `config/config.yml` such as `client_name`
     5. While developing you may want to enable debugging with `environment: "develop"`, but his may leak confidential informations to the enduser, so ensure to change back before deploying an image.
     5. Go back to build the image and test your changes. Your "Design - Build - Test - Learn" Cycle has just started :smiley: 
10. For more information, have a look at the following resources
  * [Iso Build Config](/guide/iso-build/config.html)
  * [All about the Specs repo](/guide/specs-repo/overview.html)
  * [Write your own role](/guide/own-role/)
## Custom role - Development Example - Tutorial
Due to the nature of such Linux clients, Potos has a lot of different parts that need to work together. So we recommend you read the different parts of [Write your own role](/guide/own-role/). How ever this quick tutorial should help you getting started with a custom role.
### Role Development Environment
1. Have a Linux Client running, on where you can write some Ansible but also directly run and apply the changes. If you don't have your own client yet, we recommend the Vanilla Client from above.
2. Create yourself a working directory `mkdir ~/potos-development` to working `cd ~/potos-development`
3. Create a directory for roles in that dir `mkdir roles`
4. Clone the role template `git clone https://github.com/projectpotos/ansible-role-potos_template roles/my_role`
5. Create a short playbook `test.yml` (you can add/remove roles you want to test at the end)
```yaml
---
- name: Test Role playboo
  hosts: all
  gather_facts: yes
  vars:
    potos_variables_you_want_set: "potos"
  tasks:
    - name: run roles
      ansible.builtin.include_role:
        name: "{{ item }}"
      loop:
        - my_role
```
6. Now you can edit, test and run the role with `ansible-playbook test.yml` or to get more verbose `ansible-playbook test,yml --diff -vv`
### Minimal Role >>> Full Role
7. Write the Ansible task that should happen to `tasks/main.yml`. 
  * If you want/need to parameterize anything you can use `defaults/main.yml`
  * For templates just use the `templates` directory
  * When you need files withoutu templating, you may create a directory `files` and store the files in there
8. Once your role works, adjust all the files around it:
  * `README.md`
  * `CODEOWNERS.md`
  * `meta/main.yml`
  * `meta/argument_specs.yml`
9. Write testing for the role with Molecule: see [here](/guide/own-role/molecule.html)



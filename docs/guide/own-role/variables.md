# Variables

## Variable naming
Since all variables in Ansible are global and there is no scoping, generally all variables used should be prefixed with the Ansible role name. 

As an example, all variables from the [`potos_basics` role](https://github.com/projectpotos/ansible-role-potos_basics) are prefixed with `potos_basics_`.
Thus instead of `enable_reboot_reminder` the variables is named `potos_basics_enable_reboot_reminder` to avoid any conflicts.

## Dependency

Generally you should reduce any variable dependency on other roles or Potos.
If you really need these variables, be sure to at least define a sane default value so that your role can be used also in other context.

## Arguments spec

Try to use the `/meta/argument_specs.yml` file to declare what variables your role uses. Ansible will automatically validate them before running your role.
More information on that topic:
 * [Ansible argument validation module](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/validate_argument_spec_module.html)
 * [Blog on that topic](https://steampunk.si/blog/ansible-role-argument-specification/)

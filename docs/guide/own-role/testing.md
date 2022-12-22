# Testing

To really test your role, we recommend to create a new branch in your spec repo and create an iso referencing that branch.

For early development of your Ansible role, you might simply checkout your role into the correct directory and create a small `test.yml` playbook to call with `ansible-playbook test.yml`

```yaml
---

- name: Potos test playbook
  hosts: localhost
  connection: local
  become: True
  gather_facts: True
  ignore_errors: False

  vars:
    # define default run type
    potos_runtype: 'daily'

  tasks:
    - name: run all the required roles
      ansible.builtin.include_role:
        name: '{{ potos_playbook_role }}'
        apply:
          tags:
            - always
      loop:
        - your_role_to_test
      loop_control:
        loop_var: 'potos_playbook_role'
```

# Potos Playbook

Potos clients use the [global playbook](https://github.com/projectpotos/ansible-plays-potos) to execute the Ansible roles defined in the specs repository.

This repository contains 2 playbooks.
## prepare.yml

This playbook does the following:

1. It reads what specs repository is defined to use in `/etc/potos/specs_repo.yml` and then clones that repo.
2. It copies the files from the `templates` to the playbook directory and applies the templating.
3. It copies the files from the `files` to the playbook directory without applying any templating.
4. It copies the files from the `vars` directory into the location, so that they are in `playbook.yml` availables as `host_vars` for localhost.
5. It installs all the collections defined in the `collection.yml`

## playbook.yml

This playbook does the following:

1. It reads the specs definition and defines the client name as `potos_plays_client_full_name` for the long version and `potos_plays_client_short_name` for the short version
2. It templates the `templates/requirements.yml.j2` from the playbook directory to `requirements.yml` for later usage
4. It installs all the roles defined in `requirements.yml`
5. It executes all the roles defined in `requirements.yml`


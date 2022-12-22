# Molecule

All Ansible roles should be tested using Molecule. This also allows for testing in pipelines to verify a role still works as intended after a change.

Generally we recommend that you [read the docs of Molecule](https://molecule.readthedocs.io/), as this quick introduction only gives an very brief insight. [Link](https://molecule.readthedocs.io/)

## Quick introduction

You probably want to add Molecule with Docker to your `requirements.txt` file.
```
# At least Ansible 2.12 is needed due to used features like 'argument_specs'
ansible>=2.12

# Required for testing
ansible-lint[yamllint]
molecule[docker, lint]
```

You can then simply call `python3 -m pip install -r requirements.txt` to install Molecule and all its dependencies.

For the start create a `molecule/default` directory to create a default scenario.

In there define everything related to this scenario in the `molecule.yml` file. By default Ansible is used as provisioner, docker als driver and galaxy for dependency resolution.

Further we have the following Ansible playbooks in that directory:
 * `prepare.yml`, this playbook prepares the scenario in the Docker container
 * `converge.yml, with this playbook the role you want to test should be applied to the Docker container. This playbook gets executed twice, the second time is to test for [idempotence](https://en.wikipedia.org/wiki/Idempotence).
 * `verify.yml`, in this playbook you should check if the container is now in the state it should be in.


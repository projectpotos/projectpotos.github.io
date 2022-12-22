---
prev: { link: "../specs-repo/structure.md", text: "Specs Repository - Structure"}
---
# Ansible Basics

Ansible is an automation engine for various different tasks. In the case of Potos it is used to bring clients into the desired state and mostly also to regularly enforce that state.

Instead of a central, agentless deployment, Potos uses a pull mechanism and applies the configuration to the localhost, to avoid the need for all clients to have to be reachable from a central server.

If you want to lean more on about Ansible, there are a ton of resources online availables such as ["Learning Ansible basics"](https://www.redhat.com/en/topics/automation/learning-ansible-tutorial) from Red Hat.

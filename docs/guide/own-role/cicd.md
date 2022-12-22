# CI / CD

To ensure certain qualities in our Ansible roles, we use automated testing with Github Actions.

## Automated Molecule tests

We want to ensure the defined [molecule tests](./molecule) always succeed and we follow the yaml/ansible lint for a consistent code quality, so we have the following Github Workflow:

```yaml
---

name: Molecule tests and ansible linting

on:
  push:
  pull_request:

jobs:
  test:
    runs-on: ubuntu-20.04
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Python 3
        uses: actions/setup-python@v4
        with:
          python-version: '3.x'

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          python -m pip install -r requirements.txt

      - name: Lint with ansible-lint including yamllint
        run: |
          ansible-lint

      - name: Test with molecule
        run: |
          molecule test

```

## Commit message linting

We commit our self to only use [Conventional Commits](https://www.conventionalcommits.org) messages. Thus we have a linter installed, rejecting any commits not follwing this standard.

## Semantic Versioning

To allow referencing specific versions of a Ansible role in the Specs Repository, with each merged PR into the main branch an new version according to the [Semantic Versioning](https://semver.org/) convention is released.
We do not release the new version `x.y.z` but also update the tags to `x.y` and `x`, to allow for a more relaxed version definition.



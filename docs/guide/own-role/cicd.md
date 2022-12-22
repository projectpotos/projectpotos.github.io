# CI / CD

To ensure certain qualities in our Ansible roles, we use automated testing with Github Actions.

## Automated Molecule tests

We want to ensure the defined [Molecule tests](./molecule) always succeed and we follow the yaml/ansible lint for a consistent code quality, so we have the following Github Workflow:

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

We are committed to using only [Conventional Commits](https://www.conventionalcommits.org) messages. Thus we have a linter installed, rejecting any commits which are not following this standard.

## Semantic versioning

To allow referencing specific versions of an Ansible role in the Specs Repository, each merged PR into the main branch releases a new version according to the [Semantic versioning](https://semver.org/) convention.
We do not release the new version `x.y.z` but also update the tags to `x.y` and `x`, to allow for a more relaxed version definition.



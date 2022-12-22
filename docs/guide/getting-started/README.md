# Getting Started

Here you will find instructions on how to set up your Potos Linux client, but the best way of getting to know Potos is simply by try it yourself. Don't be scared by the unknown territory :wink:

## Specs Repository
For your custom client you need your own "Specs" Repository. This repository defines all the basics of how your client will look.
It defines what [Ansible](https://en.wikipedia.org/wiki/Ansible_(software)) roles should be applied, in what frequence, and with what variables.

The only other source for some very limited parameters is with the iso image generation.

You can read everything about this "Specs" repository [here](/guide/specs-repo/overview).

## Iso Build
For the iso generation, the main thing you need is a [config directory](/guide/iso-build/config) with a [config.yml](/guide/iso-build/config.html#config-yml) file.
This file defines the most basic things for the iso, such as how the client should be named or where to look for the "Specs Repository".



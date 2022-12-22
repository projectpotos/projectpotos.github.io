# Getting Started

Besides the following facts, the best way of getting to know Potos is to just try it your self. Don't be scared by the unknown territory :wink:

## Specs Repository
For your custom client you need your own "Specs" Repository. This repository defines basically everything on how your client will look.
It defines what [Ansible](https://en.wikipedia.org/wiki/Ansible_(software)) roles should be applied in what frequence and with what variables.

The only second source for some very limited parameters are with the iso image generation.

You can read everything about this "Specs" repository [here](/guide/specs-repo/overview).

## Iso Build
For the iso generation, the main thing you need is a [config directory](/guide/iso-build/config) with a [config.yml](/guide/iso-build/config.html#config-yml) file.
This file defines for the iso, the most basic thins such as how the client should be named, where to look for the "Specs Repository".



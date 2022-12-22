# How to build a ISO

Make sure you have your [`config/`](./config) directory available. 
For your first ISO build tests we recommend you to use our sample from this repo [link](https://github.com/projectpotos/potos-iso-builder/tree/main/config). 
You find further information about that config directory [here](./config)

To build the iso yourself, you can choose between one of the following possibilities:
 * [Plain Docker](#build-iso)
 * [Docker Compose](#docker-compose)
 * [Github Actions](#github-workflow)

If you want to build the build container yourself [link](#build-your-own-container-image)

## Build iso
### Docker plain

1. Have a workdirectory with your [`config/`](./config) adjusted for your client
2. Run `docker run -it -v $(pwd)/config:/config -v $(pwd)/output:/output ghcr.io/projectpotos/potos-iso-builder:latest`
3. Enjoy the iso in `output/`

### Docker compose

1. Have a workdirectory with your [`config/`](./config) adjusted for your client
2. Copy the `docker-compose.yml` file from [here](https://github.com/projectpotos/potos-iso-builder/blob/main/docker-compose.yml) to that directory
3. Run `docker-compose up` in the main directory
4. Enjoy the iso in `output/`

### Github Workflow
1. Create a new repo containing the `config` directory adjusted for your client
2. Create the following file as workflow file under `.github/workflows/isobuild.yml`
```
name: Build Iso
on:
  workflow_dispatch:
  pull_request:
jobs:
  build:
    name: Build Iso
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v3
      - name: Run the build process with Docker
        uses: addnab/docker-run-action@v3
        with:
          image: ghcr.io/projectpotos/potos-iso-builder:latest
          run: ./build-iso
          options: -v ${{ github.workspace }}:/config -v /output:/output
      - name: Save iso
        uses: actions/upload-artifact@v3
        with:
          name: potos-iso
          path: /output/*.iso
          retention-days: 1
```

## Build your own container image

If you want to build the build container image yourself, have a look at the [`potos-iso-builder`](https://github.com/projectpotos/potos-iso-builder) repo. 
All the container relevant files are in the container subdirectory. And described in the [README](https://github.com/projectpotos/potos-iso-builder/blob/main/README.md)


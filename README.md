# Node Backend for a Cat Card App

A nodejs server for a simple image transformation app.

1. Fetches an image of a cat with some custom text from https://cataas.com
2. Fetches an image of another cat with some more custom text from https://cataas.com
3. Binds these images together into one image
4. Saves the resulting image as a file

It consists of: a Node.js server (this repository)

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


---

## Install

    $ git clone https://github.com/mkappworks/cat_card_nodebackend.git
    $ cd cat_card_nodebackend
    $ npm install

## Running the project in dev mode

    $ npm run dev

## Running the project

    $ npm run start

## Simple build for production

    $ npm run build

## Environment Variables

Add a .env file in the root directory and set the following environment variables:

    $ CAT_GREETING : string (eg. CAT_GREETING = "Hello")

    $ CAT_WHO : string (eg. CAT_WHO = "You")

    $ CAT_WIDTH : number (eg.  CAT_WIDTH = 400)

    $ CAT_HEIGHT : number (eg. CAT_HEIGHT = 500)

    $ CAT_COLOR : string (eg. CAT_COLOR = "Pink")

    $ CAT_SIZE : number (eg. CAT_SIZE = 100)

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                                  |
| **src**                  | Contains  source code that will be compiled to the dist dir                                     |
| **src/constant**            | Contain all server constants                           | 
| **src/router**            | Contain all express routes, separated by module/area of application                             |                       
| **src/controller**            | Helper functions dealing with api calls, image transformation and file save |
| **.env**         | Contains server environment variables                                                                  |
| **package.json**             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)|

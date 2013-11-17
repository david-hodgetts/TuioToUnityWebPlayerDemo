# Unity webplayer tuio integration demo

this demo illustrates passing tuio messages to unity's webplayer.
The tuio messages are be handled by [touchscript](https://github.com/InteractiveLab/TouchScript) on Unity's side.

This works by proxying the tuio messages over websockets. We use a node server and [Tuio.js](https://github.com/fe9lix/Tuio.js) to accomplish this. This gets the Tuio messages on the browser's javascript engine. We then forward those messages to the player via Unity's SendMessage interface.

## Server requirements

[Node.js](http://nodejs.org/)

## Installation

run the following command from the root of the project:

			npm install

## Usage

run the following command from the root of the project

			node server.js

## note

- this example uses Express.js to serve the static content. This dependency could easily be removed

- the unity project can be found here.


## licence

MIT, read, hack, improve
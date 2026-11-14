let prompt = require("prompt-sync")();
let EventEmitter = require("node:events");

let Emitter = new EventEmitter();

let name = prompt("Enter your name: ");
Emitter.on(name, () => {
  console.log("Hello",name);
});

Emitter.emit(name);

// This will serve as your main file through which you will launch the game client.

const net = require("net");
const {connect} = require('./client.js');


console.log("Connecting ...");
connect();



// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });

  const handleUserInput = function (key) {
    if (key === '\u0003') {
  process.exit();
}
  };
  return stdin;
};

setupInput();
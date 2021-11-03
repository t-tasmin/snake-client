// This will serve as your main file through which you will launch the game client.
const net = require("net");
const {connect} = require('./client');
const {setupInput} = require('./input');


console.log("Connecting ...");
let conn = connect();

//Taking inputs from Keyboard
setupInput(conn);
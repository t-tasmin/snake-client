// This will serve as your main file through which you will launch the game client.

const net = require("net");
const {connect} =require('./client.js');



console.log("Connecting ...");
connect();
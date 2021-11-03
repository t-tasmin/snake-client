// establishes a connection with the game server

const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host:'165.227.47.243'  ,// IP address here,
    port:50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
  console.log("Successfully connected to game server");
  conn.write('Name: TAN!'); // writing to server
  });
  
 
  conn.on('data', (data) => {
  console.log('Server says: ', data);// data from server
  });
  
  return conn;
};// End of Connect function

  module.exports = {connect};
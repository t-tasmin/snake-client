// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection =conn;
  connection.setEncoding("utf8");

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

   stdin.on("data", (key) => {

    if (key === 'l') {
      connection.write("Say: Funny Game!!");
    }

    if (key === 'w') {
      connection.write("Move: up");
    }
 
    if (key === 'a') {
      connection.write("Move: left");
    }

    if (key === 's') {
      connection.write("Move: down");
    }

    if (key === 'd') {
      connection.write("Move: right");
    }

    if (key === '\u0003') {
      process.exit();
    }
    
  });// End of Handler

  return stdin;

};// End of setupInput

module.exports = {setupInput};

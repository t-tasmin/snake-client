// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  conn.setEncoding("utf8");

  stdin.on("data", (key) => {

    if (key === 'w') {
      conn.write("Move: up");
    }

    if (key === 'a') {
      conn.write("Move: left");
    }

    if (key === 's') {
      conn.write("Move: down");
    }

    if (key === 'd') {
      conn.write("Move: right");
    }

    if (key === '\u0003') {
      process.exit();
    }
    
  });// End of Handler

  return stdin;

};// End of setupInput

module.exports = {setupInput};

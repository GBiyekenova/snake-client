const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here,
  });
  conn.on("connect", () => {
    console.log("yay, connection is made");// code that does something when the connection is first established
  });
  conn.on("data", () => {
    console.log("you ded cuz you idled");// code that does something when the connection is first established
  });
  conn.on("close", () => {
    console.log("closed connection");// code that does something when the connection is first established
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
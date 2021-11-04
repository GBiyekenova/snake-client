const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  // myFunction's code
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");// code that does something when the connection is first established
    conn.write("Name: GBK");
    conn.write("Say: Yaay!")
  });
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });
  conn.on("close", () => {
    console.log("closed connection");
  });
  conn.on("error", () => {
    console.log("error occured");


  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,// stores the function as connect
};
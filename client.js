
const net = require("net");

const connect = () => {
  // myFunction's code
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");// code that does something when the connection is first established
    conn.write("Name: GBK")
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

module.exports = {
  connect,// stores the function as connect
};
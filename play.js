const { connect } = require("./client");

connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};
const handleUserInput = function (key) {

  if (key === '\u0003') {
    process.exit();
  }
  console.log(key);
  if (key === 'w') {
    console.log('press w');
  }
  // your code here
};

setupInput();
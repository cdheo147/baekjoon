const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
// const input = ["9", "-13"];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let a = Number(input[0]);
  let b = Number(input[1]);
  if (a > 0) {
    if (b > 0) {
      console.log(1);
    } else {
      console.log(4);
    }
  } else {
    if (b > 0) {
      console.log(2);
    } else {
      console.log(3);
    }
  }
  process.exit();
});

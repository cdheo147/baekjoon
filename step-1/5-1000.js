const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
// const input = ["1", "2"];
const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
// const input = ["3", "4"];
const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a * b);

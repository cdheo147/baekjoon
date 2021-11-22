const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
// const input = ["7", "3"];
const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

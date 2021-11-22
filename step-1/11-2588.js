const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = ["472", "385"];
const a = parseInt(input[0]);
const b = input[1];

for (let i = 2; i >= 0; i--) {
  console.log(a * parseInt(b[i]));
}

console.log(a * parseInt(b));

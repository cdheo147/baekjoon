const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
// const input = ["5", "54321"];
const n = Number(input[0]);

let result = 0;

for (let i = 0; i < input[1].length; i++) {
  result += Number(input[1][i]);
}

console.log(result);

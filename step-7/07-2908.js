const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");
// const input = ["221", "231"];
const A = input[0];
const B = input[1];

function sanggeun(str) {
  let answer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    answer += str[i];
  }
  return Number(answer);
}

console.log(sanggeun(A) > sanggeun(B) ? sanggeun(A) : sanggeun(B));

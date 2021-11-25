const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
// const input = ["3", "40 80 60"];

const n = Number(input[0]);
const arr = input[1].split(" ");
let m = 0;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  const t = Number(arr[i]);
  if (m < t) {
    m = t;
  }
  sum += t;
}

const result = (100 / (n * m)) * sum;

console.log(result);

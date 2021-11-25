const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// const input = ["3", "29", "38", "12", "57", "74", "40", "85", "61"];
let max = 0;
let idx = 0;

for (let i = 0; i < input.length; i++) {
  if (max < Number(input[i])) {
    max = input[i];
    idx = i + 1;
  }
}

console.log(max);
console.log(idx);

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// const input = ["5", "1 1", "2 3", "3 4", "9 8", "5 2"];
const t = parseInt(input[0]);

let answer = "";

for (let i = 1; i <= t; i++) {
  arr = input[i].split(" ");
  answer += `Case #${i}: ${parseInt(arr[0]) + parseInt(arr[1])}\n`;
}

console.log(answer);

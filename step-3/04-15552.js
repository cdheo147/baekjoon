const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// const input = ["5", "1 1", "12 34", "5 500", "40 60", "1000 1000"];
const t = parseInt(input[0]);

let answer = "";

for (let i = 1; i <= t; i++) {
  arr = input[i].split(" ");
  answer += parseInt(arr[0]) + parseInt(arr[1]) + "\n";
}

console.log(answer);

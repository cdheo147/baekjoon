const input = require("fs").readFileSync("dev/stdin").toString();
// const input = ["5"];
const n = parseInt(input);

let answer = "";

for (let i = 1; i <= n; i++) {
  for (let j = n - i; j > 0; j--) {
    answer += " ";
  }
  for (let j = 0; j < i; j++) {
    answer += "*";
  }
  answer += "\n";
}

console.log(answer);

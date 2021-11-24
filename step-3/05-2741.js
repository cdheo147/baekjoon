const input = require("fs").readFileSync("dev/stdin").toString();
// const input = ["5"];
const n = parseInt(input);

let answer = "";

for (let i = 1; i <= n; i++) {
  answer += i + "\n";
}

console.log(answer);

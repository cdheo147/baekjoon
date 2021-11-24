const input = require("fs").readFileSync("dev/stdin").toString();
// const input = ["5"];
const n = parseInt(input);

let answer = "";

for (let i = n; i >= 1; i--) {
  answer += i + "\n";
}

console.log(answer);

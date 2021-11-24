const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// const input = ["1 1", "2 3", "3 4", "9 8", "5 2", "0 0"];

let n = 0;
let answer = "";

while (true) {
  const a = input[n].split(" ");
  if (a[0] == 0 && a[1] == 0) {
    break;
  }
  answer += `${parseInt(a[0]) + parseInt(a[1])}\n`;
  n++;
}

console.log(answer);

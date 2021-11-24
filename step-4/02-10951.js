const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// const input = ["1 1", "2 3", "3 4", "9 8", "5 2"];

let n = 0;
let answer = "";

// 백준 테스트 마지막에 공백, 개행문자가 있는듯
while (n < input.length - 1) {
  const a = input[n].split(" ");

  answer += `${parseInt(a[0]) + parseInt(a[1])}\n`;
  n++;
}

console.log(answer);

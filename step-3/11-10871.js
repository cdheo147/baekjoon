const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// const input = ["10 5", "1 10 4 9 2 3 8 5 7 6"];
const arr1 = input[0].split(" ");
const n = parseInt(arr1[0]);
const x = parseInt(arr1[1]);

let answer = "";
const arr2 = input[1].split(" ");

for (let i = 0; i < n; i++) {
  if (parseInt(arr2[i]) < x) {
    answer += `${arr2[i]} `;
  }
}

console.log(answer);

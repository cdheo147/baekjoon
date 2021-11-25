const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// const input = ["150", "266", "427"];
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

const arr = (a * b * c).toString().split("");
let count = 0;
let result = "";

for (let i = 0; i <= 9; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == i) {
      count++;
    }
  }
  result += `${count} \n`;
  count = 0;
}

console.log(result);

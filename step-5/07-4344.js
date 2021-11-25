const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// const input = [
//   "5",
//   "5 50 50 70 80 100",
//   "7 100 95 90 80 70 60 50",
//   "3 70 90 80",
//   "3 70 90 81",
//   "9 100 99 98 97 96 95 94 93 91",
// ];
const c = Number(input[0]);

let sum = 0;
let count = 0;
const numberArr = [];

for (let i = 1; i <= c; i++) {
  const arr = input[i].split(" ");
  const n = Number(arr[0]);
  let t = 0;
  for (let j = 1; j <= n; j++) {
    t = Number(arr[j]);
    numberArr.push(t);
    sum += t;
  }
  for (let j = 0; j < n; j++) {
    if (sum / n < numberArr[j]) {
      count++;
    }
  }
  console.log(`${((count / n) * 100).toFixed(3)}%`);

  count = 0;
  sum = 0;
  numberArr.length = 0;
}

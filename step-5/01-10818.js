const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// const input = ["5", "20 10 35 30 7"];
const n = Number(input[0]);
let arr = input[1].split(" ");

for (let i = 0; i < n; i++) {
  arr[i] = Number(arr[i]);
}

let max = arr[0];
let min = arr[0];

for (let i = 0; i < n; i++) {
  if (max < arr[i]) max = arr[i];
  if (min > arr[i]) min = arr[i];
}

console.log(`${min} ${max}`);

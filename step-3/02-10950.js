const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// const input = ["5", "1 1", "2 3", "3 4", "9 8", "5 2"];
const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
  const arr = input[i].split(" ");
  const a = parseInt(arr[0]);
  const b = parseInt(arr[1]);

  console.log(a + b);
}

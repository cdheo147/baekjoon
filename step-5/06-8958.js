const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// const input = [
//   "5",
//   "OOXXOXXOOO",
//   "OOXXOOXXOO",
//   "OXOXOXOXOXOXOX",
//   "OOOOOOOOOO",
//   "OOOOXOOOOXOOOOX",
// ];
const total = Number(input[0]);

let sum = 0;
let count = 0;

for (let i = 1; i <= total; i++) {
  sum = 0;
  count = 0;

  for (let j = 0; j < input[i].length; j++) {
    input[i][j] == "O" ? count++ : (count = 0);
    sum += count;
  }

  console.log(sum);
}

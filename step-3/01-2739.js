const input = require("fs").readFileSync("dev/stdin").toString();
// const input = ['2'];
const n = parseInt(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}

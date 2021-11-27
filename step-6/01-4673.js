function d(n) {
  let result = 0;
  const t = n + "";

  for (let i = 0; i < t.length; i++) {
    result += Number(t[i]);
  }
  result += Number(n);
  return result;
}

const arr = [];

for (let i = 1; i <= 10000; i++) {
  let isSelfNumber = true;
  for (let j = 0; j < arr.length; j++) {
    if (i == arr[j]) {
      isSelfNumber = false;
      break;
    }
  }
  if (isSelfNumber) {
    console.log(i);
  }
  arr.push(d(i));
}

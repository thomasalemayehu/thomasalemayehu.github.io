function printFibo(n, a, b, res = "") {
  if (n <= 0) {
    console.log(a);
    return;
  }
  res += a;
  printFibo(n - 1, b, a + b, res);
  if (n === 1) {
    console.log(res);
  }
}

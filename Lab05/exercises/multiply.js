function multiply(arr) {
  let m = 1;

  arr.forEach((num) => (m *= num));

  return m;
}

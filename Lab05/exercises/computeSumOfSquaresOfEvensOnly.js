function computeSumOfSquaresOfEvensOnly(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    if (number % 2 == 0) {
      sum += number ** 2;
    }
  });

  return sum;
}

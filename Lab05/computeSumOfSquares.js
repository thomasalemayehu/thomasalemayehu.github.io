function computeSumOfSquares(numbers) {
  return numbers.reduce((sum, number) => sum + number ** 2, 0);
}

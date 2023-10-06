function printOddNumbersOnly(numbers) {
  numbers.filter((num) => {
    if (num % 2 != 0) console.log(num);
  });
}

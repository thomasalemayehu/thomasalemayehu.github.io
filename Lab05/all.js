function max(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

function isVowel(char) {
  char = char.toLowerCase();
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    return true;
  } else {
    return false;
  }
}

function add(arr) {
  let sum = 0;

  arr.forEach((num) => (sum += num));

  return sum;
}

function multiply(arr) {
  let m = 1;

  arr.forEach((num) => (m *= num));

  return m;
}

function reverse(str) {
  let res = "";

  for (let i = str.length-1; i > -1; i--) {
    res += str[i];
  }

  return res;
}

function findLongestWordLength(words) {
  let max = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
    }
  }

  return max;
}

function filterLongWords(words, length) {
  let res = [];

  words.forEach((word) => {
    if (word.length > length) res.push(word);
  });

  return res;
}

function computeSumOfSquares(numbers) {
  return numbers.reduce((sum, number) => sum + number ** 2, 0);
}

function printOddNumbersOnly(numbers) {
  numbers.filter((num) => {
    if (num % 2 != 0) console.log(num);
  });
}

function computeSumOfSquaresOfEvensOnly(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    if (number % 2 == 0) {
      sum += number ** 2;
    }
  });

  return sum;
}

function sumWithReduce(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

function multipleWithReduce(numbers) {
  return numbers.reduce((product, number) => product * number, 1);
}

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


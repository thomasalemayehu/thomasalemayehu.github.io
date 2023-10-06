function findLongestWordLength(words) {
  let max = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
    }
  }

  return max;
}

function filterLongWords(words, length) {
  let res = [];

  words.forEach((word) => {
    if (word.length > length) res.push(word);
  });

  return res;
}

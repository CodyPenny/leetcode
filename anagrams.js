// It is not clear how words with same size but different characters should be handled from the examples provided. If we are only interested in the first occurrence, I would keep track of only different size words, but, that would be too easy, so will understand if it's not an anagram of the first occurrence, it stays in the array

function funWithAnagrams(text) {
  if (text === null || !text.length) return [];

  const anagramTracker = {};
  const firstOccurrences = [];
  
  for (let word of text) {
    if (isFirstOcurrenceAnagram(word, anagramTracker)) {
      firstOccurrences.push(word);
    }
  }
  return firstOccurrences.sort();
}

function isFirstOcurrenceAnagram(word, anagramTracker) {
  const unicodeValue = getUnicodeValueSum(word);
  if (!anagramTracker[word.length]) {
    anagramTracker[word.length] = { [unicodeValue]: word };
    return true;
  }
  if (!anagramTracker[word.length][unicodeValue]) {
    anagramTracker[word.length][unicodeValue] = word;
    return true;
  }
  return false;
}

function getUnicodeValueSum(word) {
  let sum = 0;
  for (let index in word) {
    sum += word.charCodeAt(index);
  }
  return sum;
}

console.log(
  funWithAnagrams(['test', 'moon', 'estt', 'code', 'doce', 'framer', 'frame'])
);

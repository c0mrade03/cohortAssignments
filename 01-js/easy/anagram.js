/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const charCountMap = new Map();

  for (const char of str1) {
    if (char !== ' ') {
      charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }
  }

  for (const char of str2) {
    if (char !== ' ') {
      charCountMap.set(char, (charCountMap.get(char) || 0) - 1);
    }
  }

  for (const count of charCountMap.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;

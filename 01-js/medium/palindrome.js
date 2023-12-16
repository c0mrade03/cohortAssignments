/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function removeNonAlphabets(str) {
  return str.replace(/[^a-zA-Z]/g, '');
}

function isPalindrome(str) {
  str = removeNonAlphabets(str);
  str = str.toLowerCase();
  let n = str.length;
  for (let i = 0; i < n; i++) {
    if (str[i] != str[n - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;

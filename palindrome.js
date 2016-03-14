'use strict';

module.exports = (str) => {
  let half = Math.round(str.length / 2);
  let start = 0;
  let end = str.length - 1;
  let palindrome = true;
  const SPACE = 32;

  while (half && palindrome) {
    const startSpace = str.charCodeAt(start) === SPACE;
    const endSpace = str.charCodeAt(end) === SPACE;

    if (str[start] == str[end]) {
      start++;
      end--;
    } else if (startSpace || endSpace) {
      startSpace && start++;
      endSpace && end--;
    } else {
      palindrome = false;
    }

    half--;
  }

  return palindrome;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let result = {};
  for (let letter of sentence) {
    if (letter === ' ') {
      continue;
    }
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));

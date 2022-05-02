// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  } else if (arr.length > 1) {
    return arr.slice(1);
  } else {
    return undefined;
  }
};


// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.join(' '), ["Lighthouse", "Labs"].join(' '));
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
let test = [];
assertEqual(tail(test).join(' '), [].join(' '));
test = [1,2,3];
assertEqual(tail(test).join(' '), [2, 3].join(' '));
test = [];
assertEqual(tail(test).join(' '), [1].join(' '));
test = [1];
assertEqual(tail(test).join(' '), [1].join(' '));
  





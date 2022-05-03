// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  return assertEqual(eqArrays(arr1, arr2), true);
};
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1], true); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], true); // => should PASS
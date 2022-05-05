const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅Assertion Passed: ", arr1, "===", arr2);
  } else {
    console.log("🛑🛑🛑Assertion Failed: ", arr1, "!==", arr2);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const result = [];
  for (let item of array) {
    result.push((callback(item)));
  }
  return result;
};

assertArraysEqual(map(words, word => word.length), [ 6, 7, 2, 5, 3 ]);
assertArraysEqual(map(words, word => word.toUpperCase()), [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
assertArraysEqual(map(words, word => `${word} has ${word.length} letters`), ['ground has 6 letters', 'control has 7 letters', 'to has 2 letters', 'major has 5 letters', 'tom has 3 letters']);
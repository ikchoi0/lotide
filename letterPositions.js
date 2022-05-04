const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter === ' ') {
      continue;
    }
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(i);
  }
  return results;
};
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);

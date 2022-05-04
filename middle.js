const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    return false;
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

const middle = function(arr) {
  if (arr.length <= 2)
    return [];
  let middleIndex = (arr.length / 2);
  return Number.isInteger(middleIndex) ? arr.slice(middleIndex - 1, middleIndex + 1) : [arr[Math.floor(middleIndex)]];
};
assertArraysEqual(middle([1]), []); // => should PASS
assertArraysEqual(middle([1, 2]), []); // => should PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => should PASS



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
const flatten = function(arr) {
  const flattenedArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let elem of element) {
        flattenedArr.push(elem);
      }
    } else
      flattenedArr.push(element);
  }
  return flattenedArr;
};

assertArraysEqual(flatten([]), []); // => should PASS
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => should PASS
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6, 8, 9]]), [1, 2, 3, 4, 5, 6, 8, 9]); // => should PASS

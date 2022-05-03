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

const without = function(source, itemsToRemove) {
  const result = [];
  for (let element of source) {
    if (itemsToRemove.indexOf(element) < 0) {
      result.push(element);
    }
  }
  return result;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3", "4", 4], [1, 2, "3"]), ["1", "2", "4", 4]);
assertArraysEqual(without([1], []), [1]);
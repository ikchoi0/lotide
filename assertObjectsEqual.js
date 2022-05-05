const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    let value1 = object1[key];
    let value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if(!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log("✅✅✅Assertion Passed: ", inspect(actual), "===", inspect(expected));
  } else {
    console.log("🛑🛑🛑Assertion Failed: ", inspect(actual), "!==", inspect(expected));
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); 


const a1 = { a: "1", b: "2", c: [1, 2]};
const b1 = { b: "2", a: "1", c: [2, 1]};
assertObjectsEqual(a1, b1); 

const a2 = { a: "1", b: "2", c: [1, 2]};
const b2 = { b: "2", a: "1", c: [1, 2]};
assertObjectsEqual(a2, b2); 
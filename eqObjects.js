
// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function(arr1, arr2) {
//   if(arr1.length !== arr2.length){
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };



// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {
//   let object1Keys = Object.keys(object1);
//   let object2Keys = Object.keys(object2);
//   if (object1Keys.length !== object2Keys.length) {
//     return false;
//   }
//   for (let key of Object.keys(object1)) {
//     let value1 = object1[key];
//     let value2 = object2[key];
//     if (Array.isArray(value1) && Array.isArray(value2)) {
//       if(!eqArrays(value1, value2)) {
//         return false;
//       }
//     } else if (value1 !== value2) {
//       return false;
//     }
//   }
//   return true;
// };

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); 

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); 

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); 

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); 

// const a1 = { a: "1", b: "2", c: [1, 2]};
// const b1 = { b: "2", a: "1", c: 1};
// assertEqual(eqObjects(a1, b1), false); 

// const a2 = { a: "1", b: "2", c: [1, 2]};
// const b2 = { b: "2", a: "1", c: [2, 1]};
// assertEqual(eqObjects(a1, b2), false); 


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  for (let key of object1Keys) {
    let value1 = object1[key];
    let value2 = object2[key];
    if (!Array.isArray(value1) && !Array.isArray(value2) && typeof value1 === 'object' && typeof value2 ==='object') {
      if(!eqObjects(value1, value2)) {
        return false;
      };
    } else if (Array.isArray(value1) && Array.isArray(value2)) {
      if(!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); 
// // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({}, {a: 1}), false);
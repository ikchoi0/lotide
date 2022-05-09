const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => should PASS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => should PASS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]) , false); // => should PASS
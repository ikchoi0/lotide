const assertEqual = require('../assertEqual');
const tail = require('../tail');
const head = require('../head');
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse", "Lighthouse");
assertEqual(1, 1);
assertEqual(1, 2);

console.log('head.js-------');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

console.log('tail.js-------');
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
  

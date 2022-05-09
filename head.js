const assertEqual = require('./assertEqual');


/*
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse", "Lighthouse");
assertEqual(1, 1);
assertEqual(1, 2);
*/
const head = function(arr) {
  if (arr === []) {
    return undefined;
  } else
    return arr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
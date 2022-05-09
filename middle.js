const middle = function(arr) {
  if (arr.length <= 2)
    return [];
  let middleIndex = (arr.length / 2);
  return Number.isInteger(middleIndex) ? arr.slice(middleIndex - 1, middleIndex + 1) : [arr[Math.floor(middleIndex)]];
};

module.exports = middle;
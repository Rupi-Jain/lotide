const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array , expected) {
  let temp = [];
  if (array.length < 3)
    return temp;
  
  let middle = Math.ceil(array.length / 2);  
  if (array.length % 2 === 0) {
    temp.push(array[middle - 1]);
    temp.push(array[middle]);
  }
  else
    temp.push(array[middle - 1]);
  
  return temp;     
}

module.exports = middle;
const eqArrays = require('./eqArrays');
const assertArraysEqual = function(actual , expected) 
{
  return eqArrays(actual, expected);
};
module.exports = assertArraysEqual;


assertArraysEqual([1, 2, 3] , [1, 2, 3]);
assertArraysEqual([1, 3, 3] , [1, 2]);
assertArraysEqual([1, 2, 3] , [1, '2', 3]);
assertArraysEqual(['1', '2', '3'] , ['1', '2', '3']);

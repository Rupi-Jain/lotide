const assertArraysEqual = function(actual) 
{
  if(actual)
  {
    console.log(`💚💚💚 Assertion Passed: middle of [${arrGlobal1}]  is  [${arrGlobal2}]`);
  }
  else
  {
    console.log(`❤️‍🩹❤️‍🩹❤️‍🩹 Assertion Failed: middle [${arrGlobal1}]  is not  [${arrGlobal2}]`);
  }
  return '';
};

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) 
        return false;           
  }
  return true;
};

const middle = function(array) {

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

let arrGlobal1 = [1];
let arrGlobal2 = [];
console.log( assertArraysEqual (eqArrays ( middle(arrGlobal1)  , arrGlobal2 )))// => []
arrGlobal1 = [1, 2];
arrGlobal2 = [];
console.log( assertArraysEqual (eqArrays ( middle(arrGlobal1), arrGlobal2 ))) // => []
arrGlobal1 = [1, 2, 3];
arrGlobal2 = [2];
console.log( assertArraysEqual (eqArrays ( middle(arrGlobal1), arrGlobal2 ) )) // => [2]
arrGlobal1 = [1, 2, 3, 4, 5];
arrGlobal2 = [3];
console.log( assertArraysEqual (eqArrays ( middle(arrGlobal1) , arrGlobal2 ) )) // => [3]
arrGlobal1 = [1, 2, 3, 4];
arrGlobal2 = [2, 3];
console.log( assertArraysEqual (eqArrays ( middle(arrGlobal1), arrGlobal2  ))) // => [2, 3]
arrGlobal1 = [1, 2, 3, 4, 5, 6];
arrGlobal2 = [3, 4];
console.log( assertArraysEqual (eqArrays ( middle(arrGlobal1), arrGlobal2) )) // => [3, 4]
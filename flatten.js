const assertArrayEqual = function(actual) 
{
  if(actual)
  {
    console.log('💚💚💚 Assertion Passed:' , arrGlobal1  , '===' , arrGlobal2);
  }
  else
  {
    console.log('❤️‍🩹❤️‍🩹❤️‍🩹 Assertion Failed:' , arrGlobal1  , '===' ,  arrGlobal2);
  }
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

const flatten = function(vals) {

  for (let val of vals) {

    if(! Array.isArray(val))
      flatenedArr.push(val);
    else
      flatten(val);
  }
  return flatenedArr;
}


let flatenedArr = [];
let arrGlobal1 = [1, 2, [3, 4] , 5, [6]];
let arrGlobal2 = [1, 2, 3, 4, 5, 6];
console.log(assertArrayEqual( eqArrays ( flatten (arrGlobal1) , arrGlobal2)));

flatenedArr = [];
arrGlobal1 = [1, 2, [3, [4, 5]] , 6, [7 , [8 , [9, 10]]]];
arrGlobal2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(assertArrayEqual( eqArrays ( flatten (arrGlobal1) , arrGlobal2)));

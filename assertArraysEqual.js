const assertArrayEqual = function(actual) 
{
  if(actual)
  {
    console.log(`💚💚💚 Assertion Passed: [${arrGlobal1}]  ===  [${arrGlobal2}]`);
  }
  else
  {
    console.log(`❤️‍🩹❤️‍🩹❤️‍🩹 Assertion Failed: [${arrGlobal1}]  ===  [${arrGlobal2}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) 
        return false;     
    }
  }
  else
    return false;
  return true;
};
let arrGlobal1;
let arrGlobal2;
arrGlobal1 = [1, 2, 3];
arrGlobal2 = [1, 2, 3];
assertArrayEqual(eqArrays(arrGlobal1 , arrGlobal2), true);
arrGlobal1 = [1, 3, 3];
arrGlobal2 = [1, 2, 3];
assertArrayEqual(eqArrays(arrGlobal1 , arrGlobal2), true);
arrGlobal1 = [1, 3, 3];
arrGlobal2 = [1, 2, ];
assertArrayEqual(eqArrays(arrGlobal1 , arrGlobal2), true);
arrGlobal1 = [1, 3, 3];
arrGlobal2 = [1, 2, '3'];
assertArrayEqual(eqArrays(arrGlobal1 , arrGlobal2), true);
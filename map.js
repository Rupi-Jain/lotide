const assertArraysEqual = function(actual) 
{
  if(actual)
  {
    console.log(`💚💚💚 Assertion Passed: [${results1}]  ===  [${results2}]`);
  }
  else
  {
    console.log(`❤️‍🩹❤️‍🩹❤️‍🩹 Assertion Failed: [${results1}]  ===  [${results2}]`);
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
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
let words = ["ground", "control", "to", "major", "tom"];
let results1 = map(words, word => word[0]);
let results2 = ['g', 'c', 't', 'm', 't']; 

console.log(assertArraysEqual(eqArrays(results1, results2 )));

words = ["Table", "Chair", "Lamp", "Laptop", "Pen"];
results1 = map(words, word => word[0]);
results2 = ['T', 'C', 'L', 'L', 'P']; 

console.log(assertArraysEqual(eqArrays(results1, results2) ));


const assertArraysEqual = function(actual) 
{
  if(actual)
  {
    console.log(`💚💚💚 Assertion Passed: [${words}]  ===  [${testWords}]`);
  }
  else
  {
    console.log(`❤️‍🩹❤️‍🩹❤️‍🩹 Assertion Failed: [${words}]  ===  [${testWords}]`);
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

const without = function(words, remWords) {

  let wordsKeep = [];
  
  if(! Array.isArray(words))
    return;

  if (! Array.isArray(remWords))
    return;

  for(let word of words) {
    wordsKeep.push(word);
  }

  for (let remWord of remWords) {
    let index = wordsKeep.indexOf(remWord);
    if (index > -1)
      wordsKeep.splice(index , 1);
  }
  
  
}


let words = ["hello", "world", "lighthouse"];
let testWords = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(eqArrays(words, testWords));

words = ["hello", "world", "lighthouse"];
testWords = ["hello", "world", "lighthouse"];
without(words, ["lighthouse" , "world"]); 
assertArraysEqual(eqArrays(words, testWords));

words = ["1", "2", "3"];
testWords = [ "1", "2", "3"];
without(words, [1, 2, "3"]); 
assertArraysEqual(eqArrays(words, testWords));

words = [1, 2, 3];
testWords = [1, 2, 3];
without(words, [2]); 
assertArraysEqual(eqArrays(words, testWords));


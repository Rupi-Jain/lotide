const assertObjectsEqual = function(actual, expected) 
{
  const inspect = require('util').inspect;
  if(actual)
  {
    console.log(`💚💚💚 Assertion Passed: ${inspect(ab)}  ===  ${inspect(ba)}`);
  }
  else
  {
    console.log(`❤️‍🩹❤️‍🩹❤️‍🩹 Assertion Failed: ${inspect(ab)} !== ${inspect(ba)}`);
  }
  return "";
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) 
    return false;
  for (let key in object1) {
    if (Array.isArray(object1[key]))
    {
      let rs = eqArrays(object1[key], object2[key]);
      if(!rs)
       return false;
    }
    else
    {
      if(object1[key] !== object2[key])
      return false
    }   
   }
  return true;
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

let ab = { a: "1", b: "2" };
let ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(eqObjects(ab, ba), true)); // => true

ba = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(eqObjects(ab, ba), false)); // => false

ab = { c: "1", d: ["2", 3] };
ba = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(eqObjects(ab, ba), true)); // => true

ba = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(eqObjects(ab, ba), false)); // => false
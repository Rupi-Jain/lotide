const assertEqual = function(actual, expected) 
{
  if(actual === expected)
  {
    console.log(`๐๐๐ Assertion Passed: ${actual}  ===  ${expected}`);
  }
  else
  {
    console.log(`โค๏ธโ๐ฉนโค๏ธโ๐ฉนโค๏ธโ๐ฉน Assertion Failed: ${actual} !== ${expected}`);
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false
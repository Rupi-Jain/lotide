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
};

const findKeyByValue = function(obj, val) {
  for(let key in obj) {
    if(obj[key] === val)
      return key;
  }
  return ;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
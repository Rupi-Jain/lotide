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

module.exports = {
  assertEqual
};



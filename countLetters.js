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

const countLetters = function(items) {
  let countResult = {};
  for(let item of items) {
    if (item !== " "){
      if (!countResult.hasOwnProperty(item))
        countResult[item] = 1;
      else
        countResult[item] += 1;
    }
  }
  //console.log(countResult);
  return (countResult);

}

console.log(countLetters("lighthouse in the house"));

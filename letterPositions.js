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
const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " "){
      if (!results.hasOwnProperty(sentence[i])) {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }   
      else
        results[sentence[i]].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));


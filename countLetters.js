const assertEqual = function(actual, expected) 
{
  if(actual === expected)
  {
    console.log(`💚💚💚 Assertion Passed: ${actual}  ===  ${expected}`);
  }
  else
  {
    console.log(`❤️‍🩹❤️‍🩹❤️‍🩹 Assertion Failed: ${actual} !== ${expected}`);
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

const head = function(arrVal)
{
  if(arrVal.length > 0)
    return arrVal[0];
}
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



// TEST CODE
assertEqual(head(["Hello", "Lighthouse" ,  "Labs"]) , 'Hello' );
assertEqual(head([5 , 6 , 7]), 5);
assertEqual(head([]), 5);

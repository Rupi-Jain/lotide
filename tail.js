const tail = function(arrVal)
{
  let arrTail = arrVal.slice(1);
  return arrTail;
}

const assertEqual = function(actual, expected) 
{
  if(actual === expected)
  {
    console.log(`💚💚💚 Assertion Passed: ${actual}  ===  ${expected}`);
  }
  else
  {
    
  }  
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
const check =  ["Lighthouse", "Labs"];

if(result.length === check.length)
{
  for(let i = 0; i < result.length; i++)
  {
    assertEqual(result[i],check[i] ); 
  }
}
else
{
  console.log("❤️‍🩹❤️‍🩹❤️‍🩹 Assertion Failed");
}



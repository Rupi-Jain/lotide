// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const assertEqual = function(actual, expected) 
{
  if(actual === expected)
  {
    console.log(`💚💚💚 Assertion Passed: ${actual}  ===  ${expected}`);
  }
  else
  {
    console.log(`❤️‍🩹❤️‍🩹❤️‍🩹 Assertion Failed: ${actual}  ===  ${expected}`);
  }
};
const countOnly = function(allItems, itemsToCount) {
  let countObj = {};
  for (let items in itemsToCount)
  {
    console.log(items);
    let count = 0;
    if (itemsToCount[items]){
      for(let i = 0; i < allItems.length; i++){
        if(items === allItems[i])
          count += 1;
      }
      if (count > 0)
        countObj[items] = count;
    }  
      console.log(countObj);
  }
  return countObj;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
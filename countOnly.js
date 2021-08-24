const countOnly = function(allItems, itemsToCount) {
  let countObj = {};
  for (let items in itemsToCount)
  {
    let count = 0;
    if (itemsToCount[items]){
      for(let i = 0; i < allItems.length; i++){
        if(items === allItems[i])
          count += 1;
      }
      if (count > 0)
        countObj[items] = count;
    }  
  }
  return countObj;
}
module.exports = countOnly;

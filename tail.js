const tail = function(arrVal)
{
  let words = [];
  if (arrVal.length > 0)
    words = arrVal.slice(1);
  
  return words;
}

module.exports = tail;



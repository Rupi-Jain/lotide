const assertEqual = require('./assertEqual');

const head = function(arrVal) {
  if (arrVal.length > 0)
  console.log(arrVal[0])
    return arrVal[0];
};

module.exports = head;

const assertArraysEqual = require('../assertArraysEqual');
const assert = require('../assertEqual');
const middle = require('../middle');


assert.assertEqual(assertArraysEqual(middle([1, 2, 3]), [2]), true )
assert.assertEqual(assertArraysEqual(middle([1, 2]), []), true )
assert.assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]), true )
assert.assertEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]), true )
assert.assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true )

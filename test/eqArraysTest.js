const eqArrays = require('../eqArrays');
const assert = require('../assertEqual');

assert.assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assert.assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), false);
assert.assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assert.assertEqual(eqArrays([1, 2, '3'], [1, 2, 3]), false);
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('../assertEqual');

assert.assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
assert.assertEqual(assertArraysEqual([1, 3, 3], [1, 2, 3]), false);
assert.assertEqual(assertArraysEqual([1, 2, 3], [1, 2]), false);
assert.assertEqual(assertArraysEqual([1, 2, '3'], [1, 2, 3]), false);
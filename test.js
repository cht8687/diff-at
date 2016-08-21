var diffAt = require('./');
var test = require('tape');

test('diff at', function(t) {
  t.plan(7);
  t.strictEqual(diffAt('abcdefg', 'abcd1fg'), 4);
  t.strictEqual(diffAt(null, 'abcd1fg'), 0);
  t.strictEqual(diffAt(undefined, 'abcd1fg'), 0);
  t.strictEqual(diffAt(123456789, 12356789), 3);
  t.strictEqual(diffAt([1,2,3,4,5], [1,2,4,5,6]), 2);
  t.strictEqual(diffAt(['1','2','3','4','5'], ['1','2','4','5','6']), 2);
  t.strictEqual(diffAt([{ a: 1 }, { b: 2}, { c: 4}], [ { a: 1 }, { b: 2}, { c: 3}]), 2);
});

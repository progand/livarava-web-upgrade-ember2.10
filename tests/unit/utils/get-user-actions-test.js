import getUserActions from 'livarava-neuroner-mockups/utils/get-user-actions';
import { module, test } from 'qunit';

module('Unit | Utility | get user actions');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = getUserActions();
  assert.ok(Array.isArray(result) && result.length > 0);
});

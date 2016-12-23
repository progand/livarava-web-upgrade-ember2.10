import getNeuronTypes from 'livarava-neuroner-mockups/utils/get-neuron-types';
import { module, test } from 'qunit';

module('Unit | Utility | get neuron types');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = getNeuronTypes();
  assert.ok(Array.isArray(result));
});

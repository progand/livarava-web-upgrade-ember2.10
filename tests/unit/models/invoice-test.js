import { moduleForModel, test } from 'ember-qunit';

moduleForModel('invoice', 'Unit | Model | invoice', {
  // Specify the other units that are required for this test.
  needs: ['model:neuron']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

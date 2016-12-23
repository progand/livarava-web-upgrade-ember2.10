import { moduleForModel, test } from 'ember-qunit';

moduleForModel('neuroner.filter', 'Unit | Model | neuroner/filter', {
  // Specify the other units that are required for this test.
  needs: ['model:neuroner.feed']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

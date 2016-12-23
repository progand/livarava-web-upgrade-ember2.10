import Ember from 'ember';
import NeuronerDeleteControllerMixinMixin from 'livarava-neuroner-mockups/mixins/neuroner/delete-controller-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | neuroner/delete controller mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let NeuronerDeleteControllerMixinObject = Ember.Object.extend(NeuronerDeleteControllerMixinMixin);
  let subject = NeuronerDeleteControllerMixinObject.create();
  assert.ok(subject);
});

import Ember from 'ember';
import NeuronerAdapterMixinMixin from '../../../mixins/neuroner-adapter-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | neuroner adapter mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let NeuronerAdapterMixinObject = Ember.Object.extend(NeuronerAdapterMixinMixin);
  let subject = NeuronerAdapterMixinObject.create();
  assert.ok(subject);
});

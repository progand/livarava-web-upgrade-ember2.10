import Ember from 'ember';
import NeuronTypeDeterminatorMixin from '../../../mixins/neuron-type-determinator';
import { module, test } from 'qunit';

module('Unit | Mixin | neuron type determinator');

// Replace this with your real tests.
test('it works', function(assert) {
  let NeuronTypeDeterminatorObject = Ember.Object.extend(NeuronTypeDeterminatorMixin);
  let subject = NeuronTypeDeterminatorObject.create();
  assert.ok(subject);
});

import Ember from 'ember';
import ShowMoreListMixin from '../../../mixins/show-more-list';
import { module, test } from 'qunit';

module('Unit | Mixin | show more list');

// Replace this with your real tests.
test('it works', function(assert) {
  let ShowMoreListObject = Ember.Object.extend(ShowMoreListMixin);
  let subject = ShowMoreListObject.create();
  assert.ok(subject);
});

import checkImageUrl from 'livarava-neuroner-mockups/utils/check-image-url';
import { module, test } from 'qunit';

module('Unit | Utility | check image url');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = checkImageUrl('http://localhost:4200/ember-getting-started-image.png');
  assert.ok(result);
  assert.equal(checkImageUrl('http://localhost:4200/'), null);
});

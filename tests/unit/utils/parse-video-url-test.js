import parseVideoUrl from 'livarava-neuroner-mockups/utils/parse-video-url';
import { module, test } from 'qunit';

module('Unit | Utility | parse video url');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = parseVideoUrl('https://www.youtube.com/watch?v=NJu94rQi5qE');
  assert.equal(result, 'https://www.youtube.com/embed/NJu94rQi5qE');
});

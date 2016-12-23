import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('feed-list-item', 'Integration | Component | feed list item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{feed-list-item}}`);

  assert.ok(this.$('input').length);

  // Template block usage:
  this.render(hbs`
    {{#feed-list-item}}
      template block text
    {{/feed-list-item}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('feed-form', 'Integration | Component | feed form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{feed-form}}`);

  assert.ok(this.$('form').length);

  // Template block usage:
  this.render(hbs`
    {{#feed-form}}
      template block text
    {{/feed-form}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

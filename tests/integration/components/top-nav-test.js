import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('top-nav', 'Integration | Component | top nav', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{top-nav}}`);

  assert.ok(this.$('nav').length);

  // Template block usage:
  this.render(hbs`
    {{#top-nav}}
      template block text
    {{/top-nav}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bottom-nav', 'Integration | Component | bottom nav', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bottom-nav}}`);

  assert.ok(this.$('footer').length);

  // Template block usage:
  this.render(hbs`
    {{#bottom-nav}}
      template block text
    {{/bottom-nav}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

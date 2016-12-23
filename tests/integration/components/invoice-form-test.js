import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('invoice-form', 'Integration | Component | invoice form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{invoice-form}}`);

  assert.ok(this.$('input').length);

  // Template block usage:
  this.render(hbs`
    {{#invoice-form}}
      template block text
    {{/invoice-form}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('neuron-autocomplete', 'Integration | Component | neuron autocomplete', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{neuron-autocomplete}}`);

  assert.ok(this.$('input').length);

  // Template block usage:
  this.render(hbs`
    {{#neuron-autocomplete}}
      template block text
    {{/neuron-autocomplete}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

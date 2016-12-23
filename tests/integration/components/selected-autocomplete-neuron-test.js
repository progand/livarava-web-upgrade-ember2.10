import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('selected-autocomplete-neuron', 'Integration | Component | selected autocomplete neuron', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{selected-autocomplete-neuron}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#selected-autocomplete-neuron}}
      template block text
    {{/selected-autocomplete-neuron}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

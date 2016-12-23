import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('neuron-connections-menu', 'Integration | Component | neuron connections menu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{neuron-connections-menu}}`);

  assert.equal(this.$('.dropdown-item').length, 5);

  // Template block usage:
  this.render(hbs`
    {{#neuron-connections-menu}}
      template block text
    {{/neuron-connections-menu}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

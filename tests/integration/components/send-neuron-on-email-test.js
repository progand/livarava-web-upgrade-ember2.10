import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('send-neuron-on-email', 'Integration | Component | send neuron on email', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{send-neuron-on-email}}`);

  assert.ok(this.$('form').length);

  // Template block usage:
  this.render(hbs`
    {{#send-neuron-on-email}}
      template block text
    {{/send-neuron-on-email}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('feedback-form', 'Integration | Component | feedback form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{feedback-form}}`);

  assert.ok(this.$('form').length);

  // Template block usage:
  this.render(hbs`
    {{#feedback-form}}
      template block text
    {{/feedback-form}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

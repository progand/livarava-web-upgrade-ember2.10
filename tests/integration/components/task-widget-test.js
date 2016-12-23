import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('task-widget', 'Integration | Component | task widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{task-widget}}`);

  assert.ok(this.$('div').length);

  // Template block usage:
  this.render(hbs`
    {{#task-widget}}
      template block text
    {{/task-widget}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

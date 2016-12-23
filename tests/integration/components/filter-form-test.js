import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-form', 'Integration | Component | filter form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{filter-form}}`);

  assert.ok(this.$('form').length);

  // Template block usage:
  this.render(hbs`
    {{#filter-form}}
      template block text
    {{/filter-form}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

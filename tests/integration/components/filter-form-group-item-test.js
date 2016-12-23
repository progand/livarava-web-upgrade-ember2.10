import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-form-group-item', 'Integration | Component | filter form group item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{filter-form-group-item}}`);

  assert.notEqual(this.$().text().indexOf('All'), -1);

  // Template block usage:
  this.render(hbs`
    {{#filter-form-group-item}}
      template block text
    {{/filter-form-group-item}}
  `);

  assert.notEqual(this.$().text().trim().indexOf('template block text'), -1);
});

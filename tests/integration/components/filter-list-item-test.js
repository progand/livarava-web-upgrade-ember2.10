import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-list-item', 'Integration | Component | filter list item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{filter-list-item}}`);

  assert.ok(this.$('input').length);

  // Template block usage: 
  this.render(hbs`
    {{#filter-list-item}}
      template block text
    {{/filter-list-item}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

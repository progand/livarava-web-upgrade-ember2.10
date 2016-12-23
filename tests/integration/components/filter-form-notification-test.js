import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-form-notification', 'Integration | Component | filter form notification', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{filter-form-notification}}`);

  assert.notEqual(this.$().text().indexOf('Email'), -1);

  // Template block usage:
  this.render(hbs`
    {{#filter-form-notification}}
      template block text
    {{/filter-form-notification}}
  `);

  assert.notEqual(this.$().text().trim().indexOf('template block text'), -1);
});

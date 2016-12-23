import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rssitems-infinite-scroll', 'Integration | Component | rssitems infinite scroll', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rssitems-infinite-scroll}}`);

  assert.equal(this.$().text().trim(), 'Nothing was found');

  // Template block usage:
  this.render(hbs`
    {{#rssitems-infinite-scroll}}
      template block text
    {{/rssitems-infinite-scroll}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});

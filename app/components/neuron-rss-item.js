import Ember from 'ember';

export default Ember.Component.extend({
  expanded: false,
  filter: '',
  classNames: ['media'],

  title: Ember.computed('filter', function () {
    return this.getComputedString('title');
  }),
  text: Ember.computed('filter', function () {
    return this.getComputedString('text');
  }),
  externalURL: Ember.computed('item.url', function () {
    let url = this.get('item.url');

    return `/goto/?url=${encodeURIComponent(url)}`;
  }),
  getComputedString(property='title'){
    let regexp = new RegExp(this.get('filter'), 'i');

    return this.get(`item.${property}`)
      .replace(regexp, `<span class="bg-warning">$&</span>`);
  }
});

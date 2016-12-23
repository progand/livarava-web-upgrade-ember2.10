import Ember from 'ember';

export default Ember.Mixin.create({
  itemsToShow: 5,

  actions: {
    showMore(){
      this.set('itemsToShow', this.get('itemsToShow') + 5);
    }
  },

  visibleItems: Ember.computed('items', 'itemsToShow', function () {
    if (Ember.isArray(this.get('items'))) {
      return this.get('items').slice(0, this.get('itemsToShow'));
    }
  }),
  hasMore: Ember.computed('items', 'itemsToShow', function () {
    if (Ember.isArray(this.get('items'))) {
      return this.get('items').length > this.get('itemsToShow');
    }
  })
});

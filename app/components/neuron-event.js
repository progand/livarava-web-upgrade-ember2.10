import Ember from 'ember';

export default Ember.Component.extend({
  getPrice: Ember.computed('model.price', function () {
    return this.get('model.price') === 0 ? 'Free of charge' : this.get('model.price');
  })
});

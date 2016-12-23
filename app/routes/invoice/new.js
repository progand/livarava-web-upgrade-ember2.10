import Ember from 'ember';
import {SELLERS} from '../../components/invoice-form';

export default Ember.Route.extend({
  model() {
		return this.store.createRecord('invoice', {
      seller: Object.keys(SELLERS)[0],
      customer: '',
      address: '',
      email: '',
      phone: '',
      amount: '',
      currency: 'USD',
      lines: Ember.A([Ember.Object.create({
				description: '',
        price: null
      })]),
      project: null
		});
  },

  actions: {
    save(model) {
      model.save()
        .then(() => this.transitionTo('invoice'));
    }
  }
});

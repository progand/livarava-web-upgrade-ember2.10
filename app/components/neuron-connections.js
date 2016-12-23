import Ember from 'ember';
import _ from 'lodash';

import getNeuronTypes from '../utils/get-neuron-types';

export default Ember.Component.extend({
  title: '',
  type: null,
  display: null,
  axons: null,
  loading: false,
  page: 1,


  didReceiveAttrs() {
    this._super(...arguments);
    this.fetchItems();
  },

  actions: {
    setProperty(name, value) {
      this.set(name, value || null);
      this.fetchItems();
    },
    pageChanged(current) {
      this.set('page', current);
      this.fetchItems();
    },
    submit() {
      this.fetchItems();
    },
    reset() {
      this.set('page', 1);
      this.set('title', '');
      this.set('type', null);
      this.set('display', null);
      this.fetchItems();
    }
  },

  fetchItems() {
    const type = this.get('type'),
      display = this.get('display'),
      title = this.get('title'),
      params = {
        id: this.get('model.id'),
        page: this.get('page'),
        filter: {}
      };
    if (type) {
      params.filter.type = type;
    }
    if (display) {
      params.filter.display = display;
    }
    if (title) {
      params.filter.search = title;
    }
    this.set('type', type || null);
    this.set('loading', true);
    this.store.query('axon', params)
      .then(axons => this.set('axons', axons))
      .finally(() => this.set('loading', false));
  },

  types: Ember.computed('type', function() {
    return _(getNeuronTypes())
      .without(this.get('type'))
      .orderBy()
      .uniq()
      .value();
  })
});

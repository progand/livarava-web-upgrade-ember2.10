import Ember from 'ember';

export default Ember.Component.extend({
  userId: null,
  items: null,
  loading: false,
  error: null,
  tab: 1,

  didReceiveAttrs() {
    this._super(...arguments);
    this.fetchItems();
  },

  actions: {
    setTab(tab = 1) {
      this.set('tab', tab);
      this.fetchItems();
    },
    refresh(){
      this.fetchItems();
    }
  },

  getParams() {
    let params = {};
    switch (this.get('tab')) {
      case 0:
        params = {
          filter: {
            author: this.get('userId'),
            status: 'opened,in_progress'
          }
        };
        break;
      case 1:
        params = {
          filter: {
            executant: this.get('userId'),
            status: 'in_progress'
          }
        };
        break;
      case 2:
        params = {
          filter: {
            status: 'opened'
          }
        };
        break;
    }
    return params;
  },

  fetchItems() {
    if(! this.get('store')){
      return;
    }
    const params = this.getParams();
    this.set('error', null);
    this.set('loading', true);
    this.store.query('task', params)
      .then(tasks => this.set('items', tasks))
      .catch(error => this.set('error', error))
      .finally(() => this.set('loading', false));
  },
});

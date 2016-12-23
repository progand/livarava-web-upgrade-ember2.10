import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';

export default Ember.Component.extend({
  neuronId: null,
  store: Ember.inject.service(),

  isFormVisible: Ember.computed('expanded', 'model.isNew', function () {
    return this.get('expanded') && this.get('model.isNew');
  }),

  actions: {
    expand(){
      this.createModel();
      this.set('expanded', true);
    },
    collapse(){
      this.set('expanded', false);
      this.destroyModel();
    },
    new(){
      this.createModel();
    },
    submit(){
      this.get('model').save();
    }
  },

  createModel(){
    this.destroyModel();
    this.set('model', this.store.createRecord('send', {
      neuronId: this.get('neuronId'),
      filterId: this.get('filterId')
    }));
  },

  destroyModel(){
    if (this.get('model')) {
      this.store.unloadRecord(this.get('model'));
    }
    this.set('model', null);
  },

  didInsertElement() {
    this._super(...arguments);
    let typeaheads = this.$('input')
      .focus()
      .typeahead({
        minLength: 3,
        source: (query, process) => {
          Ember.$.get(`${ENV.api.host}/api/v2/autocomplete/neurons/`, {q: query, type: 'email'})
            .done(data => process(data.data))
            .fail(() => process([]));
        },
        displayText: item => item.title,
        delay: 100,
        autoSelect: true
      });

    this.set('typeaheads', typeaheads);
  },

  willDestroyElement() {
    this._super(...arguments);

    if (this.get('typeaheads')) {
      this.get('typeaheads').typeahead('destroy');
    }
    this.set('typeaheads', null);
  }
});

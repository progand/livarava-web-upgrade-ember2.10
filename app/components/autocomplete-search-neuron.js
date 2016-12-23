import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';

export default Ember.Component.extend({
  classNames: ['form-inline'],
  sourceURL: `${ENV.api.host}/api/v2/autocomplete/neurons/`,
  typeaheads: [],
  selectedAutocompleteNeuron: null,

  actions: {
    skipShortSearches(term, select) {
      if (term.length < 3) {
        select.actions.search('');
        return false;
      }
    },
    searchNeurons(query) {
      return new Ember.RSVP.Promise((resolve) => {
        Ember.$.get(this.get('sourceURL'), {
            q: query
          })
          .done(data => resolve(data.data))
          .fail(() => resolve([]));
      });
    },
    setAutocompleteNeuron(autocompleteNeuron) {
      this.set('selectedAutocompleteNeuron', autocompleteNeuron);
      if(autocompleteNeuron){
        this.onSelect(autocompleteNeuron.id);
      }
    }
  }
});

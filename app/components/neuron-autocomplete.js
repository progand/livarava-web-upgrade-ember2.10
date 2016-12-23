import Ember from 'ember';

export default Ember.Component.extend({
  min: 3,
  type: undefined,
  actions: {
    skipShortSearches(term, select) {
      if (term.length < this.get('min')) {
        select.actions.search('');
        return false;
      }
    },
    searchNeurons(query) {
      return new Ember.RSVP.Promise((resolve) => {
        Ember.$.get(this.get('sourceURL'), {
            q: query,
            type: this.get('type')
          })
          .done(data => resolve(data.data))
          .fail(() => resolve([]));
      });
    }
  }
});

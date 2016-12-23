import Ember from 'ember';
import LoadingSliderMixin from '../mixins/loading-slider';
import _ from 'lodash';

export default Ember.Route.extend(LoadingSliderMixin, {
  model() {
    return this.store.queryRecord('user', {})
      .catch(() => {});
  },

  actions: {
    openNeuron(id) {
      if (!_.isNumber(id)) {
        return;
      }

      this.transitionTo('neuron', id)
        .then(() => this.controllerFor("application").clearSearch());
    }
  },

  title(tokens) {
    tokens = Ember.makeArray(tokens);
    tokens.push('LivaRava');
    return tokens.join(' - ');
  }
});

import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';
import _ from 'lodash';

export const SELLERS = {
  'LivaRava Ukraine': 'LivaRava Ukraine',
  'LivaRava International': 'LivaRava International'
};
export const CURRENCIES = {
  'UAH': {
    title: 'UAH',
    sign: '\u20b4'
  },
  'USD': {
    title: 'USD',
    sign: '$'
  },
  'EUR': {
    title: 'EUR',
    sign: '€'
  },
  'RUB': {
    title: 'RUB',
    sign: '\u20bd'
  }
};

export default Ember.Component.extend({
  sourceURL: `${ENV.api.host}/api/v2/autocomplete/neurons/`,
  currencies: CURRENCIES,
  sellers: SELLERS,
  project: null,
  amount: Ember.observer('model.lines.@each.price', function() {
    const amount = this.get('model.lines').reduce((result, item) => result + (Number(item.price) || 0), 0);
    this.get('model').set('amount', amount);
  }),
  didReceiveAttrs() {
    this._super(...arguments);
  },
  actions: {
    addLine() {
      this.get('model.lines').pushObject(Ember.Object.create({}));
    },
    deleteLine(object) {
      this.get('model.lines').removeObject(object);
    },
    change(property, value) {
      this.set(property, value);
    },
    save() {
      this.get('save')(this.get('model'));
    },
    delete() {
      this.get('delete')(this.get('model'));
    },
    skipShortSearches(term, select) {
      if (term.length < 3) {
        select.actions.search('');
        return false;
      }
    },
    searchNeurons(query) {
      return new Ember.RSVP.Promise((resolve) => {
        Ember.$.get(this.get('sourceURL'), {
            q: query,
            type: 'project'
          })
          .done(data => resolve(data.data))
          .fail(() => resolve([]));
      });
    },
    setProject(project) {
      this.store.pushPayload({
        data: _.assign(_.pick(project, 'id'), {
          type: 'neurons',
          attributes: _.omit(project, 'id')
        })
      });
      this.get('model').set('project', this.store.peekRecord('neuron', project.id));
    }
  }
});

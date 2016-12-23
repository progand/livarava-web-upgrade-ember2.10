import Ember from 'ember';
import Model from 'ember-data/model';
import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

const DEFAULT_TITLE = 'no title';

export default Model.extend({
  seller: DS.attr('string'),
  customer: DS.attr('string'),
  address: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  amount: DS.attr('number'),
  currency: DS.attr('string'),
  status: DS.attr('string'),
  lines: DS.attr('array-of-objects'),
  project: belongsTo('neuron'),

  title: Ember.computed('lines.@each.description', function(){
    const lines = this.get('lines');
    if(!(Array.isArray(lines) && lines.length)){
      return DEFAULT_TITLE;
    }
    const line = lines.find(line => line && line.description);
    return line && line.description || DEFAULT_TITLE;
  })
});

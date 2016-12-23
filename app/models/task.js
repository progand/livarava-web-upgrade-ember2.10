import Model from 'ember-data/model';
import DS from 'ember-data';
import {
  belongsTo
} from 'ember-data/relationships';

export default Model.extend({
  title: DS.attr('string'),
  status: DS.attr('string'),
  taskType: DS.attr('string'),
  dueTimezone: DS.attr('string'),
  due: DS.attr('string'),
  hours: DS.attr('number'),
  currency: DS.attr('string'),
  amount: DS.attr('number'),

  project: belongsTo('neuron'),
  /*executant: belongsTo('neuron'),
  product: belongsTo('neuron'),
  author: belongsTo('neuron')*/
});

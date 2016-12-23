import DS from 'ember-data';

export default DS.Model.extend({
  neuronId: DS.attr('number'),
  filterId: DS.attr('number'),
  email: DS.attr('string')
});

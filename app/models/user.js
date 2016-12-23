import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  fullname: DS.attr('string'),
  image: DS.attr('string'),
  about: DS.attr('string'),
  rights: DS.attr('plain-object')
});

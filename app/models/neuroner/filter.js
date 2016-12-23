import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  label: DS.attr('string'),
  kind: DS.attr('string', {
    defaultValue: 'all'
  }),
  rules: DS.attr('array-of-objects'),
  notifications: DS.attr('array-of-objects'),
  feeds: hasMany('neuroner.feed')
});

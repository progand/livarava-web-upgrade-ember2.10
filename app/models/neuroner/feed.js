import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
	url: DS.attr(),
	rules: DS.attr('array-of-objects')
});

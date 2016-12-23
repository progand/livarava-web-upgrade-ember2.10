import Ember from 'ember';
import ShowMoreListMixin from '../mixins/show-more-list';
import _ from 'lodash';

export default Ember.Component.extend(ShowMoreListMixin, {
  filter: '',

  actions: {
    onNeuronIt(item){
      this.set('model.feed', _(this.get('model.feed'))
        .without(item)
        .value());
    }
  },

  items: Ember.computed('filter', function () {
    return this.get('model.feed').filter(item => {
      return item.get('title').toLowerCase().includes(this.get('filter').toLowerCase()) ||
        item.get('text').toLowerCase().includes(this.get('filter').toLowerCase());
    })/*.map(item => {
      let regexp = new RegExp(this.get('filter'), 'i');

      return _.assign({}, item, {
        title: item.get('title')
          .replace(regexp, `<span class="bg-warning">$&</span>`),
        text: item.get('text')
          .replace(regexp, `<span class="bg-warning">$&</span>`)
      });
    })*/;
  })
});

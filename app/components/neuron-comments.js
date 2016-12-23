import Ember from 'ember';

export default Ember.Component.extend({
  comments: null,
  loading: false,
  page: 1,

  didReceiveAttrs() {
    this._super(...arguments);
    this.fetchItems();
  },

  actions: {
    pageChanged(current) {
      this.set('page', current);
      this.fetchItems();
    },
    addCommentNeuron() {
      if (!this.get('newCommentsNeuron')) {
        return;
      }
      //this.set('comments', [this.get('newCommentsNeuron')].concat(this.get('comments')));
      const comment = this.store.createRecord('comment', this.get('newCommentsNeuron'));
      comment.save()
        .then(() => {
          this.set('commentsData', '');
          this.fetchItems(true);
        });
    }
  },

  fetchItems(silent = false) {
    const params = {
      root: this.get('model.id'),
      page: this.get('page'),
      filter: {}
    };
    if (!silent) {
      this.set('loading', true);
    }
    this.store.query('comment', params)
      .then(comments => this.set('comments', comments))
      .finally(() => this.set('loading', false));
  },


  newCommentsNeuron: Ember.computed('commentsData', function() {
    return {
      created: new Date(),
      text: this.get('commentsData'),
      root: this.get('model.id'),
      parent: null,
      image: 'https://www.livarava.com/static/livarava/img/neurons/person.png'
    };
  })
});

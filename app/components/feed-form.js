import Ember from 'ember';
import getPreviews from '../utils/get-previews';
import getArticle from '../utils/get-article';

export default Ember.Component.extend({
  preview: false,
  loadFeed() {
    if (!this.get('preview')) {
      return;
    }
    this.set('article', null);
    this.set('previews', Ember.Object.create({
      loading: true
    }));
    getPreviews({
        url: this.get('model.url')
      }).then(items => this.set('previews', Ember.Object.create({
        success: true,
        items
      })))
      .catch(error => this.set('previews', Ember.Object.create({
        error
      })));
  },
  actions: {
    loadArticle(options) {
      if (!options) {
        this.set('article', null);
        return;
      }
      const {url, title} = options;

      const rule = this.get('model.rules').find(rule => url.startsWith(rule.url)) || {};
      this.set('article', Ember.Object.create({
        loading: true,
        title,
        url
      }));
      getArticle({
          url
        }, rule.selector, rule.without)
        .then(content => this.set('article', Ember.Object.create({
          success: true,
          url,
          title,
          content
        })))
        .catch(error => this.set('article', Ember.Object.create({
          error,
          title,
          url
        })));
    },
    setPreview(preview) {
      this.set('preview', !!preview);
      this.loadFeed();
    },
    addRule() {
      if (!Array.isArray(this.get('model.rules'))) {
        this.get('model').set('rules', Ember.A());
      }
      this.get('model.rules').pushObject(Ember.Object.create({}));
    },
    deleteRule(object) {
      this.get('model.rules').removeObject(object);
    },
    save() {
      this.get('save')(this.get('model'));
    },
    delete() {
      this.get('delete')(this.get('model'));
    }
  }
});

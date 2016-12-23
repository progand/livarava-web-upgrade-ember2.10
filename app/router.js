import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search', {path: '/search/:neuron_id'});
  this.route('neuron', {path: '/neuron/:neuron_id'});
  this.route('search-examples');
  this.route('new-neuron');
  this.route('neuroner', function () {
    this.route('index', {path: '/'});
    this.route('filter-form', {path: '/filter/new'});
    this.route('filters');
    this.route('edit-filter', {path: 'filter/:id'});

    this.route('feeds');
    this.route('feed-form', {path: '/feeds/new'});
    this.route('feed-edit', {path: '/feeds/:id'});
  });

  this.route('profile', function () {
    this.route('feed');
  });
  this.route('invoice', function() {
    this.route('new');
    this.route('edit', {path: '/invoice/:id'});
  });
  this.route('tasks', function() {});

  this.route('feedbacks', function() {
    this.route('new');
  });
});

export default Router;

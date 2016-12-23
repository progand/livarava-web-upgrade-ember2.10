import Ember from 'ember';

const {
  Component,
  $
} = Ember;

export default Component.extend({
  didInsertElement() {
    this.$('iframe').one('load', evt => {
      $(evt.target).contents().find('head').append(`<style>
        header, footer{
          display: none !important;
        }
        </style>`);
    });
  }
});

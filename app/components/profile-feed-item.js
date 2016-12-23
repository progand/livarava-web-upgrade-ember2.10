import Ember from 'ember';
import checkImageURL from '../utils/check-image-url';

export default Ember.Component.extend({
  getImageFor(node='liva'){
    if (checkImageURL(this.get(`item.${node}.image_url`))) {
      return this.get(`item.${node}.image_url`);
    } else if (checkImageURL(this.get(`item.${node}.image`))) {
      return this.get(`item.${node}.image`);
    } else {
      return 'https://dev.livarava.com/static/livarava/img/neurons/'+this.get(`item.${node}.type`)+'.png';
    }
  },
  getLivaImage: Ember.computed('item.liva.image_url', 'item.liva.image', function () {
    return this.getImageFor('liva');
  }),
  getRavaImage: Ember.computed('item.rava.image_url', 'item.rava.image', function () {
    return this.getImageFor('rava');
  })
});

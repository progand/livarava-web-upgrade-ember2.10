import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  url() {
    return faker.internet.url();
  },
  selector(){
    return faker.random.arrayElement(['.post-item', '.post-item__title, .post-item__text', '.articles-grid']);
  },
  without: ''
});

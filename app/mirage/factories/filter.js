import Mirage, {
  faker
} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  label() {
    return faker.name.title();
  },
  kind(i) {
    return ['all', 'any'][i % 2];
  },
  rules(i) {
    return [{
      text: faker.lorem.sentence(),
      kind: ['contains', 'doesnt_contain', 'is', 'is_not', 'begins_with', 'ends_with'][i % 6]
    }];
  },
  notifications(i) {
    return [{
      destination: i % 2 ? faker.internet.url() : faker.internet.email(),
      kind: ['email', 'slack'][i % 2]
    }];
  }
});

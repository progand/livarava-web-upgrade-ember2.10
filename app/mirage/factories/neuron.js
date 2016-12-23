/*
 This is an example factory definition.

 Create more files in this directory to define additional factories.
 */
import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: faker.hacker.phrase,
  header: faker.hacker.phrase,
  type: 'text',
  summary: faker.lorem.paragraphs,
  created: faker.date.recent,
  comments: [],
  connections: [],
  commentsCount: faker.random.number({min: 1, max: 3})
});

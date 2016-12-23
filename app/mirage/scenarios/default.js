export default function (server) {

// Seed your development database using your factories. This
// data will not be loaded in your tests.

  server.createList('neuron', 4);
  server.createList('filter', 10);
  server.createList('feed', 100);
}

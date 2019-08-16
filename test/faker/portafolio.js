const rfr = require('rfr');
const createFactory = require('half-faked');
const faker = require('faker');
const property = rfr('test/faker/property');

const portafolio = createFactory({
  id:  () => faker.random.number(),
  properties: () => property(20),
  createdAt: () => 20180101
});

module.exports = portafolio;

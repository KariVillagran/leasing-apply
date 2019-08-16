const rfr = require('rfr');
const createFactory = require('half-faked');
const faker = require('faker');
const payments = rfr('test/faker/godPayments');

const property = createFactory({
  id:  () => faker.random.number(),
  propertyName: () => faker.name.firstName,
  payments: () => [payments(),payments(),payments(),payments(),payments(),payments(),payments(),
    payments(),payments(),payments(),payments(),payments()],
  createdAt: () => 20180101
});

module.exports = property;

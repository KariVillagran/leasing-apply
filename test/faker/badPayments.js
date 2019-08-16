const createFactory = require('half-faked');
const faker = require('faker');

const payment = createFactory({
    id:  () => faker.random.number(),
    income: () => faker.helpers.randomize([0]),
    cost: () => faker.helpers.randomize([0]),
});

module.exports = payment;

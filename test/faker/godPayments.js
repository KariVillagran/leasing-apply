const createFactory = require('half-faked');
const faker = require('faker');

let created = [20180101,20180201,20180301,20180401,20180501,20180601, 
    20180701,20180801,20180901,20181001,20181101,20181201];

const fakeCreated = () => {
    if(created.length > 0) {
        return created.shift();
    } else {
        created = [20180101,20180201,20180301,20180401,20180501,20180601, 
            20180701,20180801,20180901,20181001,20181101,20181201];
        return created.shift();
    }
};

const payment = createFactory({
    id:  () => faker.random.number(),
    income: () => faker.random.number({min: 20, max: 100}),
    cost: () => faker.random.number({min: 1, max: 20}),
    createdAt: fakeCreated
});

module.exports = payment;

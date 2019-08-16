const rfr = require('rfr');
const fs = require('fs');
const portafolio = rfr('test/faker/portafolio');

const data = portafolio(5);
const jsonData = JSON.stringify(data);


fs.writeFile('db/fakeDb/portafolio.json', jsonData, (err) => {
    if (err) {
        console.log(err);
    }
});
const fs = require('fs');
const portafolio = fs.readFileSync('db/fakeDb/portafolio.json', 'utf8');
const portafolioData = JSON.parse(portafolio);


const readOne = (id) => {
    const property = portafolioData.map(port => port.properties.filter(prop => prop.id === id)[0]);
    return property[0];
};

module.exports = {
    readOne
};
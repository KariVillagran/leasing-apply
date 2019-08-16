const fs = require('fs');
const portafolio = fs.readFileSync('db/fakeDb/portafolio.json', 'utf8');
const portafolioData = JSON.parse(portafolio);


const readOne = (id) => {
    return portafolioData.filter(port => port.id === id)[0];
};

module.exports = {
    readOne
};
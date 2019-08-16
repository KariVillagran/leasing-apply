#!/usr/bin/env node
const argv = require('yargs').argv; 
const rfr = require('rfr');
const portafolio = rfr('controller/portafolio');

const result = portafolio.noPaymentPercent(argv.portafolio, argv.startDate, argv.endDate);
console.log(result);
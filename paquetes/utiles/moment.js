const moment = require('moment');

let ahora = moment();

console.log(ahora.toString()); // fecha actual
console.log(ahora.format('YYYY/MM/DD - HH:mm')); //formato a la fecha
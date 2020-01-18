const os = require('os')

//console.log(os.arch()) permite ver la arquitectura del sistema que esta corriendo el código
//console.log(os.cpus()) permite conocer el numero de cpus o cores en el procesador

//console.log(os.constants) permite ver las variables de entorno

console.log(os.freemem());

const SIZE = 1024

function kb(byte) { return byte/SIZE; }
function mg(byte) { return kb(byte)/SIZE; }
function gb(byte) { return mg(byte)/SIZE; }

console.log(kb(os.freemem()));
console.log(mg(os.freemem()));
console.log(gb(os.freemem()));
console.log(gb(os.totalmem()));


console.log(os.hostname()); //nombre del hostname
console.log(os.networkInterfaces()); // muestralas interfaces de red

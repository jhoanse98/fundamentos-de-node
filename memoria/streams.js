const fs = require('fs');

let data = '';

let readablestream = fs.createReadStream(__dirname+ '/input.txt');

readablestream.setEncoding('UTF-8');
/*
readablestream.on('data', (chunk)=> {
    data += chunk;
});

readablestream.on('end', ()=>{
    console.log(data);
});
*/
process.stdout.write('hola'); // ya es un buffer de escritura
process.stdout.write('adios');



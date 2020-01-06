const fs = require('fs');

//funcion para escribir un archivo con ayuda del modulo filesystem (fs.writeFile)

function escribirArchivo(ruta, contenido, cb){
    fs.writeFile(ruta,contenido, cb);
}

//escribirArchivo(__dirname + '/archivo.txt', 'hola soy un archivo creado con writeFile', console.log);

//funcion para leer un archivo con ayuda del modulo filesystem (fs.readFile)

function leerArchivo(ruta, cb){
    fs.readFile(ruta, (error, data) =>{
        if(error){
            console.error(error);
        }
        else{
            cb(data.toString());
        }
    });
}

//readFile lo acompaña una funcion (error,data) para validar la escritura del archivo

//leerArchivo(__dirname + '/archivo.txt', console.log)

//funcion para borrar un archivo (fs.unlink)

function borrarArchivo(ruta, cb){
    fs.unlink(ruta, cb)
}

//borrarArchivo(__dirname+'/archivo.txt', console.log)



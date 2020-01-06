//promises funcion asincrona que retorna promesas (then) o errores (catch)

function hola(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Hola '+ nombre)
            resolve(nombre);
        },3000);
    });
}

function adios(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('adios '+nombre);
            resolve(nombre);
        }, 2000);
    });
}

function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log("bla bla bla...");
            resolve(nombre);
            //reject('aquí está el error');
        },1000);
    });
};

// ejecuntando el proceso
console.log('iniciando procesos');
hola('Jhoan')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .catch(error=>{
        console.error('hay un error');
        console.error(error);
    })

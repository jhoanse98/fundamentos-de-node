
async function hola(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Hola '+ nombre)
            resolve(nombre);
        },3000);
    });
}

async function adios(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('adios '+nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log("bla bla bla...");
            resolve(nombre);
            //reject('aquí está el error');
        },3000);
    });
};

//await hola('Jhoan');  ha salido un error debido a que se debe ejecutar el await dentro de una función asíncrona

//forma correcta

async function main(){
    let nombre = await hola('Jhoan');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre); 
}
console.log('inicializando procesos');
main();
console.log('segundo proceso a ejecutar debido a que main es asíncrono');


let suma=0;
let suma2=0;

console.time('todo');

console.time('bucle1');
for (let i =0; i<1000000000; i++){
    suma++;
}
console.timeEnd('bucle1'); 

console.time('bucle2');
for (let j = 0; j<10000000000; j++){
    suma2++
}
console.timeEnd('bucle2');

console.time('asincrono');
asincrona()
    .then(()=>{
        console.log('aqui termina la funcion asincrona');
        console.timeEnd('asincrono');
    })


console.timeEnd('todo');



function asincrona (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        });
    });
};

//console.time y console.timeEnd me determina el tiempo de ejecucion de una proporcion de código, ya sea una función, conjunto de funciones o todo el programa
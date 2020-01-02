console.log('hola mundo');
//se abre un proceso: proceso de node que convierte el codigo a lenguaje de maquina

/*
setInterval(function(){
    console.log('sigo activo');
}, 1000);
*/

//cada segundo envia al eventloop

let i=0;
setInterval(function(){
    i++;
    console.log(i);
    //if(i===5){
    //    var a= 3+z;
    //}
},1000)

// pasa la prueba de compilado pero en el proceso de ejecución esto puede fallar

console.log("segunda instruccion");
console.log("tercera instruccion");

/*
hola mundo
segunda instruccion
tercera instruccion
1
2
3
4
5
el setInterval se ejecuta de forma asincrona
*/
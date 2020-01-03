function hola(nombre, callback){
    console.log('iniciando proceso');
    setTimeout(function(){
        console.log('Hola '+ nombre)
        callback(nombre);
    },3000);
}

function adios(nombre){
    setTimeout(function(){
        console.log('adios '+nombre);
    }, 2000);
}




hola('Jhoan', function(nombre){
    adios(nombre);
});




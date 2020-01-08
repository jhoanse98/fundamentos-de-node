function otrafuncion (){
    error();
}

function error (){
    return 3+z;
}

//cuando se usa una funcion asincrona es probable que el try catch no atienda el error

function errorAsincrono(cb){
    setTimeout(function(){
        try{
            error();
        }catch(error){
            console.error('hubo un error en la función asíncrona');
            cb(error);
        }
        //al agregar try catch en la función asíncrona se resuelve el error
        
    })
}

try{
    //otrafuncion();
    errorAsincrono(function(error){
        console.log(error.message);
    }); 
     //primero se ejecutó el console.log('se ejecuta al final') y sale un error debido a que la funcion asincrona se ejecuta en otro hilo y el try catch esta en el loopevent. en una funcion asincrona, debe ir acompañado de su propio try catch.
} catch(error){
    console.error(error.message);
}

//con try catch se permite atrapar el error
//y permite que el programa se siga ejecutando hasta la última instrucción 
//en caso que no hubiese try catch y la función error se ejecutase, la instrucción console.log
// no se llegaria a ejecutar
console.log('esto se ejecuta al final')

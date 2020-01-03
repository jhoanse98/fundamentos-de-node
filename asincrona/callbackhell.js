function hola(nombre, callback){
    setTimeout(function(){
        console.log('Hola '+ nombre)
        callback(nombre);
    },3000);
}

function adios(nombre, otrocallback){
    setTimeout(function(){
        console.log('adios '+nombre);
        otrocallback();
    }, 2000);
}



/*
hola('Jhoan', function(nombre){
    adios(nombre,function(){
        console.log("hemos terminado")
    });
});
*/


function hablar(miotrocallback){
    setTimeout(function(){
        console.log("bla bla bla...");
        miotrocallback();
    },1000);
};

/*
hola('Jhoan', function(){
    hablar(function(){
        hablar(function(){
            adios('Jhoan', function(){
                console.log("Terminó");
            });
        });
    });
});

No es la forma mas apropiada de hacer uso del callback
*/

function conversar(nombre, veces, callback){
    if(veces>=0){
        hablar(function(){
            conversar(nombre, --veces, callback);
        });
    }
    else{
        adios(nombre, callback);
    }
    
}

hola('Jhoan', function(nombre){
    conversar(nombre, 3, function(){
        console.log("proceso terminado");
    });
})
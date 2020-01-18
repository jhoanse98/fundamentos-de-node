process.on('exit', ()=>{
    console.log('el proceso va a terminar');
     //te desconectas totalmente del eventloop
     setTimeout(()=>{
         console.log('esto no se va a ejecutar');
     },0);
});

process.on ('uncaughtException', (err, origen)=>{
  console.log('ha habido un error');
  //console.log(err);  
}) //para Excepciones que no se han capturado
//process.on('unhandledRejection') // para promesas que no se han capturado y que no poseen un catch

console.log('aqui estoy fuera');
const {exec} = require('child_process');

exec('node filesystem.js', (error, stdout, sterr)=>{
    if(error){
        console.error('hubo un error');
        return false;
    }
    console.log(stdout);
})
// exec sirve para ejecutar procesos por debajo 

const bcryptjs = require('bcryptjs');

const password= 'jhoanse98';
const password2 = 'jhoanse98 ';

bcryptjs.hash(password, 5, (err, hash)=>{
    console.log(hash);
    bcryptjs.compare(password2, hash, (err, res)=>{
        console.log(res);
    });
});

//bycrptjs.hash -> recibe la cadena de caracteres, numero de iteración y una funcion de error y hash

//instalar bcryptjs para windows 
// npm i bcryptjs

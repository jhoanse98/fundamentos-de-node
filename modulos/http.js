const http = require('http');

http.createServer(router).listen(3000);

function router(req, res){

    switch(req.url){
        case '/hola':
            res.write('url diferente');
            res.end();
            break;

        default:
            res.write('Error 404');
            res.end();
    }
}

console.log('server creado');
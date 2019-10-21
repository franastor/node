const http = require('http');
http.createServer((req, res) => {

        //con esto devolvemos una web
        //     res.write('Hola Mundo');

        //con esto un json

        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'fran',
            edad: 36,
            url: req.url
        }



        res.write(JSON.stringify(salida))





        res.end();
    })
    .listen(8080);
console.log("Escuchando el puerto 8080");
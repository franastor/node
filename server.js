const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')
app.use(express.static(__dirname + '/public'))

//Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


const port = process.env.PORT || 3000;

/*
app.get('/', function(req, res) {

    let salida = {
        nombre: 'fran',
        edad: 36,
        url: req.url
    };

    res.send(salida);

})
*/

app.get('/', function(req, res) {



    res.render('home', {
        nombre: 'Francisco',

    });

})
app.get('/about', function(req, res) {

    res.render('about', {

    });

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port}`);
})
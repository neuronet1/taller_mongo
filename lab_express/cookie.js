var express = require('express'),
    cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser('Esta es mi frasee'));

app.get('/', function (req, res) {

    if(req.cookies.beenHereBefore == "yes") {
        res.send('You have been before');
    }
    else {
        res.cookie('beenHereBefore', "yes");
        res.send('This is your first time');
    }
});

app.get('/clear', function (req, res) {
    res.clearCookie('beenHereBefore');
    res.redirect('/');
});

console.log('Iniciando el servicio');
app.listen(3000);

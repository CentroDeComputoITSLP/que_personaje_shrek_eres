var express = require('express');

var app = express();

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);


function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('http://' + host + ':' + port);
}

app.use(express.static('public'));
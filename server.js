// EXPRESS
var express = require('express');
var app = express();
//BODYPARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//DB
var db = require('./models');





//ROUTES
app.get('/', function(req, res){
	res.send('Hello Worldo!');
});

//SERVER
app.listen(3000);
console.log('running on port 3000...');
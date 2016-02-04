'use strict';

var express = require('express');
var path = require('path');
var validator = require('validator');

var port = process.env.PORT || 3000;
var app = express();

var urlShort = require('./app/urlShort');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/new/:address(*)', function(req, res) {
	res.status(200);
	res.set('Content-type', 'text/json');
	if(validator.isURL(req.params.address)) 
		urlShort.saveUrl(req.params.address, res, req.get('host'));
	else 
		res.send('Invalid url');
});

app.get('/output', function(req, res) {
	res.status(200);
	res.set('Content-type', 'text/json');
	urlShort.output(req, res);
});

app.get('/:address', function(req, res){
	res.status(200);
	res.set('Content-type', 'text/json');
	urlShort.getUrl(req.params.address, res);
});

app.get('/', function(req, res) {
	res.status(200);
	res.set('Content-type', 'text/html');
});

app.listen(port, function() {
	console.log('Server is running on port ' + port);
});
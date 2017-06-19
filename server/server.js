var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((r) => {
		res.send(r);
	},(e) => {
		res.send(e);
	})
});

app.listen(3000, () => {
	console.log('App is listening on port : 3000');
});


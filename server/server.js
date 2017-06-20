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


app.get('/todos', (req,res) => {

	Todo.find().then((todos) => {
		res.send({todos});
	},(err) => {
		res.status(400).send(err);
	})
	
});

app.get('/todos/:id', (req,res) => {

	var id = req.params.id;
	Todo.findById(id).then((todo) => {
		res.send({todo});
	},(err) => {
		res.send(err);
	})
});



app.listen(3000, () => {
	console.log('App is listening on port : 3000');
});


var express = require('express');
var bodyParser = require('body-parser');
const _ = require('lodash');

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

app.delete('/todos/:id', (req,res) => {
	var id = req.params.id;
	Todo.findByIdAndRemove(id).then((todo) => {
		res.send(todo);
	},(err) => {
		res.send(err);
	})
});


app.patch('todos/:id', (req,res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text','completed']);

	if(_.isBoolean(body.completed) && body.completed){

		body.completedAt = new Date().getTime();
	}else{

		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id,{$set: body},{new: true}).then((todo) => {
		res.send({todo});
	},(err) => {
		res.send(err);
	})
});


app.post('/users',(req,res) => {
	var body = _.pick(req.body,['name','email','password']);
	var user = new User(body);

	user.save().then((user) => {
		res.send(user);
	}).catch((err) => {
		res.send(err);
	});

});



app.listen(3000, () => {
	console.log('App is listening on port : 3000');
});


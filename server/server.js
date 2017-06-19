var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

var newTodo = new Todo({
	text: 'New Todo'
});

newTodo.save().then((res) => {
	console.log('Data save');
	console.log(res);
},(err) => {
	console.log('Unable to save todo',err);
});

//Create User model

var User = mongoose.model('User',{
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
	email:{
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

var newUser = new User({
	name: 'NewUser',
	email: 'newuser@email.com' 
});

newUser.save().then((userres) => {
	console.log('User has been added successfully');
	console.log(userres);
},(err) => {
	console.log('Unable to add user',err);
});
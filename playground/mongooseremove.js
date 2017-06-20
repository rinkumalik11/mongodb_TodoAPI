const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = "5947a3ab4455671d94b093dd";


// Todo.remove({}).then((res) => {
// 	console.log(res);
// });

// Todo.findOneAndRemove();

Todo.findByIdAndRemove('5948e538d797f793ee73efbc').then((res) => {
	console.log(res);
});
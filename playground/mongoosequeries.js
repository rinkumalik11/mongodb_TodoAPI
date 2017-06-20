const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = "5947a3ab4455671d94b093dd";

// Todo.find({
// 	_id : id
// }).then((res) => {
// 	console.log(res);
// },(err) => {
// 	console.log(err);
// });

// Todo.findOne({
// 	_id : id
// }).then((res) => {
// 	console.log(res);
// },(err) => {
// 	console.log(err);
// });

Todo.findById(id).then((res)=>{
	if(!res){
		console.log('Todo not found');
	}
	console.log(res);
}).catch((e) => {
	console.log(e);
});
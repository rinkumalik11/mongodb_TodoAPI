const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable To Connect To Server');
	};

	console.log('Connection Established');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// },(err,res) => {
	// 	if(err){
	// 		return console.log('Unable to insert todo');
	// 	}

	// 	console.log(JSON.stringify(res.ops,undefined,2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'New User',
	// 	age: 26,
	// 	location: 'New Delhi'
	// }, (err,res) => {
	// 	if(err){
	// 		return console.log('Insertion into collection failed');
	// 	}

	// 	console.log('Inserted Data Successfully');
	// 	console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,2));
	// })

	db.close();
});
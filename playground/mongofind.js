const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable To Connect To Server');
	};

	console.log('Connection Established');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('59477b3a2412fae97de1ce41')
	// }).toArray().then((res) => {
	// 	console.log(JSON.stringify(res,undefined,2));
	// },(err) => {
	// 	console.log('Unable to fetch todos collection',err);
	// });

	db.collection('Users').find({name: 'New User'}).toArray().then((res) => {
		console.log('Users');
		console.log(JSON.stringify(res,undefined,2));
	},(err) => {
		console.log('Unable to fetch todos collection',err);
	});

	db.close();
});
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable To Connect To Server');
	};

	console.log('Connection Established');

	/*Delete Multiple Data Using DeleteMany Query*/

	// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((res) => {
	// 	console.log(`Deleted ${res.n}`);
	// },(err) => {
	// 	console.log('Qurey didnt worked');
	// });

	/*Delete One*/

	// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((res) => {
	// 	console.log('Deleted Data');
	// }, (err) => {
	// 	console.log('Error', err);
	// });

	/*Find One And Delete*/

	db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
		console.log(res);
	}, (err) => {
		console.log('Error',err);
	})
	
	db.close();
});
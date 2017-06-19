const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable To Connect To Server');
	};

	console.log('Connection Established');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('59477b212412fae97de1ce3b')
	},{
		$set:{
			completed: true
		} 
	},{
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	});
	
	db.close();
});
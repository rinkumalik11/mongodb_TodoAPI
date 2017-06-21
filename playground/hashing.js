var {SHA256} = require('crypto-js');
var jwt = require('jsonwebtoken');

var data = {
	id: 10
};

var token = jwt.sign(data, 'abc');
var decoded = jwt.verify();


// var msg = 'This is a message';
// var hashed = SHA256(msg);

// console.log(`Message : ${msg}`);
// console.log(`Hashed message: ${hashed}`);

// var data = {
// 	id : 4
// };

// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'secret').toString()
// };
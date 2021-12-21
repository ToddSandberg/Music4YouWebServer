'use strict';

const fs = require('fs');

const loginCredsFileName = 'login';

exports.createAccount = function(req, res) {
	console.log(req.body);
	console.log('Checking credentials...');
	const loginCredsContent = fs.readFileSync(loginCredsFileName, 'utf8');
	console.log('Got credentials:' + loginCredsContent);
	const loginCreds = JSON.parse(loginCredsContent);
	if (!loginCreds[req.body.creds.username]) {
		loginCreds[req.body.creds.username] = req.body.creds.password;
		const requestedCredsString = JSON.stringify(loginCreds);
		fs.writeFile(loginCredsFileName, requestedCredsString, (err) => {
		if (err) 
			console.log(err); 
		else { 
			console.log("File written successfully\n");
		} 
		}); 
		res.send({ message: 'Account created successfully!'});
	} else {
		console.log('Account already exists!');
		res.status(403).send({ message: `Username ${req.body.creds.username} already exists`});
	}
};


exports.login = function(req, res) {
	console.log('Checking credentials...');
	const loginCredsContent = fs.readFileSync(loginCredsFileName, 'utf8');
	console.log('Got credentials:' + loginCredsContent);
	const loginCreds = JSON.parse(loginCredsContent);
	console.log(req.body);
	if (loginCreds[req.body.creds.username] && loginCreds[req.body.creds.username] === req.body.creds.password) {
		res.send(true);
	} else {
		res.send(false);
	}
};
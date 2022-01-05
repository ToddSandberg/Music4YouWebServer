'use strict';

const fs = require('fs');

const listConfigurationFileName = 'listConfiguration';

exports.saveListConfiguration = function(req, res) {
	console.log(req.body);
	const listConfigurationString = JSON.stringify(req.body);
	fs.writeFile(listConfigurationFileName, listConfigurationString, (err) => {
	  if (err) {
	    console.log(err); 
	  } else { 
	    console.log("File written successfully\n");
	  } 
	}); 
	res.send('saving listConfiguration');
};


exports.getListConfiguration = function(req, res) {
	console.log('Getting songs...');
	const listConfigurationContent = fs.readFileSync(listConfigurationFileName, 'utf8');
	console.log('Got songs:' + listConfigurationContent);
	const songs = JSON.parse(listConfigurationContent);
	res.send({ listConfiguration: listConfiguration });
};
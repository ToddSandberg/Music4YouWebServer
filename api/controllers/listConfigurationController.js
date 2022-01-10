'use strict';

const fs = require('fs');

const listConfigurationFileName = 'listConfigurations';

exports.saveListConfiguration = function(req, res) {
	const id = JSON.stringify(req.body.id);
	const allListConfigurations = JSON.parse(fs.readFileSync(listConfigurationFileName, 'utf8'));
	allListConfigurations[id] = req.body.listConfiguration;
	const listConfigurationString = JSON.stringify(allListConfigurations);
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
	console.log('Getting list configurations...');
	const listConfigurationContent = fs.readFileSync(listConfigurationFileName, 'utf8');
	console.log('Got list configurations:' + listConfigurationContent);
	const listConfigurations = JSON.parse(listConfigurationContent);
	res.send({ listConfiguration: listConfigurations[req.body.id] });
};
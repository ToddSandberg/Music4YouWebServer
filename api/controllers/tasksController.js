'use strict';

const fs = require('fs');

const tasksFileName = 'tasks';

exports.saveTasks = function(req, res) {
	console.log(req.body.tasks);
	const taskString = JSON.stringify(req.body.tasks);
	fs.writeFile(tasksFileName, taskString, (err) => {
	  if (err) 
	    console.log(err); 
	  else { 
	    console.log("File written successfully\n");
	  } 
	}); 
	res.send('saving tasks');
};


exports.getTasks = function(req, res) {
	console.log('Getting tasks...');
	const taskContent = fs.readFileSync(tasksFileName, 'utf8');
	console.log('Got tasks:' + taskContent);
	const tasks = JSON.parse(taskContent);
	res.send({ tasks: tasks });
};
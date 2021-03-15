'use strict';

const fs = require('fs');

const songsFileName = 'songs';

exports.saveSongs = function(req, res) {
	console.log(req.body);
	const songString = JSON.stringify(req.body);
	fs.writeFile(songsFileName, songString, (err) => {
	  if (err) {
	    console.log(err); 
	  } else { 
	    console.log("File written successfully\n");
	  } 
	}); 
	res.send('saving songs');
};


exports.getSongs = function(req, res) {
	console.log('Getting songs...');
	const songContent = fs.readFileSync(songsFileName, 'utf8');
	console.log('Got songs:' + songContent);
	const songs = JSON.parse(songContent);
	res.send({ songs: songs });
};
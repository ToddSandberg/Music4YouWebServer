'use strict';

const fs = require('fs');

const songsFileName = 'songs';

exports.saveSongs = function(req, res) {
	console.log(req.body);
	const id = req.body.id;
	const allSongs = JSON.parse(fs.readFileSync(songsFileName, 'utf8'));
	allSongs[id] = req.body.songs;
	const songString = JSON.stringify(allSongs);
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
	console.log('Got id:' + req.body.id);
	console.log('Got songs for id:' + songs[req.body.id]);
	res.send({ songs: songs[req.body.id] });
};
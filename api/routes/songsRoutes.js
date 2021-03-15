'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/songsController');

  app.route('/saveSongs')
    .put(todoList.saveSongs);


  app.route('/getSongs')
    .get(todoList.getSongs);
};
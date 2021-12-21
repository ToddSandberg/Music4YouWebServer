'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/songsController');

  app.route('/saveSongs')
    .put(todoList.saveSongs);


  app.route('/getSongs')
    .get(todoList.getSongs);

  app.route('/login')
    .put(loginApp.login);

  app.route('/createAccount')
    .put(loginApp.createAccount);
};
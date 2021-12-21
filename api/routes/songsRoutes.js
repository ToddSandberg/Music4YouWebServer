'use strict';
module.exports = function(app) {
  var songsController = require('../controllers/songsController');
  var loginApp = require('../controllers/loginController');

  app.route('/saveSongs')
    .put(songsController.saveSongs);

  app.route('/getSongs')
    .get(songsController.getSongs);

  app.route('/login')
    .put(loginApp.login);

  app.route('/createAccount')
    .put(loginApp.createAccount);
};
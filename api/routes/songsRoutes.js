'use strict';
module.exports = function(app) {
  var songsController = require('../controllers/songsController');
  var loginApp = require('../controllers/loginController');
  var listConfigurationController = require('../controllers/listConfigurationController');

  app.route('/saveSongs')
    .put(songsController.saveSongs);

  app.route('/getSongs')
    .put(songsController.getSongs);

  app.route('/login')
    .put(loginApp.login);
  
  app.route('/createAccount')
    .put(loginApp.createAccount);

  app.route('/getListConfiguration')
    .put(listConfigurationController.getListConfiguration);

  app.route('/saveListConfiguration')
    .put(listConfigurationController.saveListConfiguration);
};
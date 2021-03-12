'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/tasksController');

  app.route('/saveTasks')
    .put(todoList.saveTasks);


  app.route('/getTasks')
    .get(todoList.getTasks);
};
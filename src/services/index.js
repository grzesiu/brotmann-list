'use strict';
const list = require('./list');
const item = require('./item');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(item);
  app.configure(list);
};

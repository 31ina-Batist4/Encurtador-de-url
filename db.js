const { storage } = require('debug/src/browser');
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage: './database.sqlite'
})

module.exports = sequelize;
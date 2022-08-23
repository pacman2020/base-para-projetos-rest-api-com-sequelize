const Sequelize = require("sequelize")

const sequelize = new Sequelize('crud-db','user','',{
  dialect: 'sqlite',
  storage: './dev.sqlite'
})

module.exports = sequelize
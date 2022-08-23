'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config')

class Task extends Model {}

Task.init(
  {
  title: DataTypes.STRING
},
{
  sequelize,
  modelName: 'Task',
});


module.exports = Task
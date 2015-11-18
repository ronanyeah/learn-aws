'use strict';

var sequelize = require('sequelize');
var database = module.exports = new sequelize(process.env.RDS_DB_NAME, process.env.RDS_USERNAME, process.env.RDS_PASSWORD,
  {
    host: process.env.RDS_HOSTNAME,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: function(event) { console.log(event); }
  }
);

database.define(
  'content',
  {
    id: {
      primaryKey: true,
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    picture: sequelize.STRING,
    caption: sequelize.STRING,
    timestamp: sequelize.DATE
  },
  {
    // timestamps: false,
    freezeTableName: true
  }
);

database.sync();
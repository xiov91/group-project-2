require("dotenv").config();
const Sequelize = require("sequelize");
const { sequelize } = require("../models/User");
// this is the db connection setup for using Heroku JawsDB and a .env file

if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
		host: 'localhost',
		dialect: 'mysql',
		port: 3306
	});
}
module.exports = sequelize;

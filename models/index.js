// Walter's boilerplate for the Models index.
// I'll take care of this as I set up the Models, but I'll save the associations for after their all finished

// import models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");


// same require for all models

// set up sequlize associtaions here
// sequelize associations = db table relationships; i.e. one to one, one to many, many to many

// associations must have a primary key and foreign key relationship
// sequelize models should have a primary key already set up so sequelize just needs the dev to define the foreign key, 
Model1.belongsTo(Model2, {foreignKey: 'foreignKey'});
Model2.belongsTo(Model1, {foreignKey: 'foreignKey'});

module.exports = { User, Post };
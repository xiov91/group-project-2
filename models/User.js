// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
// import our database connection from config/connection.js
const sequelize = require('../config/connection.js');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// create field/columns for the Model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // Eight characters minimum for the password
        len: [8]
      }
    }
  },
  {
    hooks: {
      // more logic for the password
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'user',
  }
);

module.exports = User;
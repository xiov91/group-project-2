const { User } = require('../models');

const userData = [
    {
        username: 'z33',
        email: 'zee@zmail.com',
        password: 'pass1234'
    },
    {
        username: 'ge0rge',
        email: 'gee@gmail.com',
        password: 'pass1234'
    },
    {
        username: 'm1guel',
        email: 'mee@mmail.com',
        password: 'pass1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
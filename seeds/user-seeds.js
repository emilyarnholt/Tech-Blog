const { User } = require('../models');

const userData = [
  {
    username: 'emilyarnholt',
    password: 'test1'
    
  },
  {
    username: 'emilynicole',
    password: 'test2'
  },
  {
    username: 'ea',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
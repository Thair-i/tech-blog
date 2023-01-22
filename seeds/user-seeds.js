const { User } = require('../models');

const userData = [
  {
    username: "james",
    email: "james@icloud.com",
    password: "password1234"
  },
  {
    username: "Josh",
    email: "josh@gmail.com",
    password: "password1234"
  },
  {
    username: "Steven",
    email: "steven@gmail.com",
    password: "password1234"
  },
  {
    username: "Emily",
    email: "emily@gmail.com",
    password: "password1234"
  },
  {
    username: "John",
    email: "john@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;

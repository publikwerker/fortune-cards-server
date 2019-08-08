const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { runServer } = require('../../server');
const { User } = require('../../users/models.js');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  username: "bigjilm",
  password: "P@55word",
  tokens: [{
    token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
  }]
}

const userTwo = {
  username: "billy",
  password: "P@55word"
}

const setUpDatabase = async () => {
  await runServer();
  await User.deleteMany({});
  await new User(userOne).save();
}

module.exports = {
  userOne,
  userOneId,
  userTwo,
  setUpDatabase
}
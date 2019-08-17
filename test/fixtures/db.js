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

const readingOneId = new mongoose.Types.ObjectId();
const readingOne = {
  query: 'Is this all there is?',
  cardsDealt: [{one: 1}, {two: 2}],
  comments: 'I know Kung Fu.'
}

const userTwo = {
  username: "billy",
  password: "P@55word"
}

const userThree = {
  username: 'ElGordo',
  password: 'P@55word',
  email:'el@gordo.com'
}

const setUpDatabase = async () => {
  await runServer();
  await User.deleteMany({});
  await new User(userOne).save();
}

module.exports = {
  readingOne,
  readingOneId,
  userOne,
  userOneId,
  userTwo,
  userThree,
  setUpDatabase
}
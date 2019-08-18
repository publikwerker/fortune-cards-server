const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { runServer, closeServer } = require('../../server');
const { User } = require('../../users/models.js');

const userOneId = new mongoose.Types.ObjectId();

const readingOneId = new mongoose.Types.ObjectId();
const readingOne = {
  userId: userOneId,
  query: 'Is this all there is?',
  cardsDealt: [{one: 1}, {two: 2}],
  comments: 'I know Kung Fu.'
}

const userOne = {
  _id: userOneId,
  username: "bigjilm",
  password: "P@55word",
  history: [readingOne],
  tokens: [{
    token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
  }]
}

readingTwo = {
  query: "Why didn't I take the blue pill?",
  cardsDealt: [{one: 1}, {two: 2}, {three: 3}],
  comments: 'Man, oh man.'
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
  await User.deleteMany();
  return await new User(userOne).save();
}

module.exports = {
  readingOne,
  readingOneId,
  readingTwo,
  userOne,
  userOneId,
  userTwo,
  userThree,
  setUpDatabase
}
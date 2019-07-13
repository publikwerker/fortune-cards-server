'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./models');
const chalk = require('chalk');

const router = express.Router();
const jsonParser = bodyParser.json();

//POST to register new user
router.post('/', jsonParser, (req, res) => {
  const requiredFields = ['username', 'password'];
  console.log(chalk.blue(`req.body is ${req.body}`));
  const missingField = requiredFields.find(field => !(field in req.body));

  // if there is no username or password
  if (missingField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Missing field',
      location: missingField,
    });
  }

  const stringFields = ['username', 'password'];
  const nonStringField = stringFields.find(
    field => field in req.body && typeof req.body[field] !== 'string'
  );

  // if the username or password are not strings
  if (nonStringField){
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Input must be string',
      location: nonStringField,
    });
  }

  const explicitlyTrimmedField = ['username', 'password'];
  const nonTrimmedField = explicitlyTrimmedField.find(
    field => req.body[field].trim() !== req.body[field]
  );

  // if username or password starts
  // or ends with whitespace
  if (nonTrimmedField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Cannot start or end with whitespace',
      location: nonTrimmedField,
    });
  }

  const sizedFields = {
    username: {
      min: 1,
      max: 72
    },
    password: {
      min: 8,
      max: 72
    }
  };

  // if username or password are shorter than minimum
  const tooSmallField = Object.keys(sizedFields).find(
    field =>
      'min' in sizedFields[field] &&
            req.body[field].trim().length < sizedFields[field].min
  );

  // if username or password are longer than maximum
  const tooLargeField = Object.keys(sizedFields).find(
    field =>
      'max' in sizedFields[field] &&
            req.body[field].trim().length > sizedFields[field].max
  );

  if (tooLargeField || tooSmallField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: tooSmallField
      ? `Must be at least ${sizedFields[tooSmallField]
        .min} characters long`
      : `Must be at most ${sizedFields[tooLargeField]
        .max} characters long`,
        location: tooSmallField || tooLargeField
    });
  }

  let { username, password } = req.body;

  return User.find({username})
  .count()
  .then(count => {
    if (count > 0 ){
      return Promise.reject({
        code: 422,
        reason: 'ValidationError',
        message: 'Username already taken',
        location: 'username',
      });
    }
    return User.hashPassword(password);
  })
  .then(hash => {
    return User.create({
      username,
      password: hash
    });
  })
  .then(user => {
    return res.status(201).json(user.serialize());
  })
  .catch(err => {
    console.log(chalk.red(`Error: ${err}`));
    if(err.reason === 'ValidationError'){
      return res.status(err.code).json(err);
    }
    res.status(500).json({code:500, message:'Internal server error'});
  });
});

//bounces back list of users FOR DEV
router.get('/', (req, res) => {
  return User.find()
    .then(users => res.json(users.map(user => user.serialize())))
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});

module.exports = {router};
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./models');
const chalk = require('chalk');

const router = express.Router();
const jsonParser = bodyParser.json();

//POST to register new user
router.post('/', jsonParser, async (req, res) => {
  console.log(req.body);
  // ensure username and password are provided
  const requiredFields = ['username', 'password'];
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

  // ensure username and password are strings
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

  // ensure there is no whitespace at start or end of strings
  const explicitlyTrimmedField = ['username', 'password'];
  const nonTrimmedField = explicitlyTrimmedField.find(
    field => req.body[field].trim() !== req.body[field]
  );

  // if username or password starts or ends with whitespace
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

  if (tooSmallField){
    console.log(tooSmallField);
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: `Must be at least ${sizedFields[tooSmallField]
          .min} characters long`,
      location: tooSmallField
    })
  }

  // if username or password are longer than maximum
  const tooLargeField = Object.keys(sizedFields).find(
    field =>
      'max' in sizedFields[field] &&
            req.body[field].trim().length > sizedFields[field].max
  );

  if (tooLargeField) {
    console.log(tooLargeField);
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: `Must be at most ${sizedFields[tooLargeField]
        .max} character(s) long`,
      location: tooLargeField
    });
  }

  // if they passed validation, set values
  let { username, password } = req.body;
  // determine if user exists
  try {
    await User.find({username})
  } catch (err) {
    return res.status(401).json({
      code: 401,
      reason: 'ValidationError',
      message: `username already exists`
    })
  }

  try { 
    let hash = await User.hashPassword(password);
    let user = await User.create({
      username,
      password: hash
    });
    const token = await user.generateAuthToken();
    return res.status(201).json({user: user.serialize(), token});
  } catch (err) {
    console.log(chalk.red(`Error: ${err.message}`));
    if(err.reason === 'ValidationError'){
      return res.status(err.code).json(err);
    }
    res.status(500).json({code: 500, message: err.errmsg});
  }
});

module.exports = {router};
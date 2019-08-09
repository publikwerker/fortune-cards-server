'use strict';
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const { User } = require('./models');
const chalk = require('chalk');
const auth = require('../middleware/auth');

const router = express.Router();
const jwtAuth = passport.authenticate('jwt', {session: false});

//A new body object containing the parsed data is populated on the request object after middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//POST to register new user
router.post('/', async (req, res) => {
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

// POST request to login
router.post('/login', async (req, res) => {
  console.log(req.body)
  try{
    const user = await User.findByCredentials(req.body.username, req.body.password);
    const { _id, username, email, history, tokens } = user;
    const editedUser = {
      _id,
      username,
      history,
      email,
      tokens
    }
    const token = await user.generateAuthToken();
    res.send({ user: editedUser, token });
  } catch (err) {
    res.status(400).send(err);
  }
});

//PATCH request to edit user
router.patch('/me', auth, async (req, res) => {
  console.log(req.body)
  console.log(req.user);
  const updates = Object.keys(req.body);
  console.log(updates);
  const allowedUpdates = ['username', 'email', 'password' ]; 
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if (!isValidOperation){
    return res.status(400).send('Error: Invalid Updates')
  }
  try { 
    console.log('trying')
    updates.forEach((update) => req.user[update] = req.body[update]);
    await req.user.save();
    const { _id, username, email, history, tokens } = req.user;
    const editedUser = {
      _id,
      username,
      history,
      email,
      tokens
    }
    res.send({ user: editedUser});
  } catch (err) {
    res.status(400).send(err)
  }
});

//DELETE request to delete user
router.delete('/me', auth, async (req, res) => {
  const user = req.user;
  try {
    await User.deleteOne({_id: user._id});
    res.send();
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = {router};
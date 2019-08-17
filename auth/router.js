'use strict';
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const config = require('../config');
const router = express.Router();
const {User, Reading} = require('../users/models.js');
const createAuthToken = function(user) {
  return jwt.sign({user},
    config.JWT_SECRET, 
    {
      subject: user.username,
      expiresIn: config.JWT_EXPIRY,
      algorithm: 'HS256'
    }
  )
};

const localAuth = passport.authenticate('local', {session: false});

//A new body object containing the parsed data is populated on the request object after middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//POST request to login
router.post('/login', localAuth, (req, res) => {
  console.log(req.body);
  const authToken = createAuthToken(req.user.serialize());
  console.log(`AuthToken is ${authToken}`);
  return res.json({user: req.user.serialize(),
    authToken})
});

const jwtAuth = passport.authenticate('jwt', {session: false});

//POST request to refresh token
router.post('/refresh', jwtAuth, (req, res) => {
  const authToken = createAuthToken(req.user);
  return res.json({authToken})
});

//GET history
router.get('/', jwtAuth, (req, res) => {
  const username = req.query.id;
  console.log(`Getting history for ${username}`);
  const requiredFields = [ 'username' ];
  const missingFields = requiredFields.find(field => !(field in req.body));

  if (missingFields){
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Missing field',
      location: missingFields,
    });
  }
  
  return User.findOne({username: username})
  .then(user => {
    return res.status(201).json(user.xtractHistory());
  })
});


// does not work
//PATCH existing reading
router.put('/reading/:readingId', jwtAuth, async (req, res) => {
  const { readingId } = req.params;
  const updates = Object.keys(req.body);
  console.log(`updates is ${updates}`);
  const allowedUpdates = [ 'comments'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send(`Error: non-updateable field`);
  };
  try {
    const user = await User.findOne({_id: req.user.userId});
    console.log(user)
    if (!user){
      console.log(`there is no user`)
      return res.status(404).send('Error: User not found');
    }
    const reading = user.history.filter((entry) => {
      return entry._id == readingId
    });
    console.log(`reading is ${reading}`)
    if (!reading) {
      return res.status(404).send(`Cannot find reading.`);
    }
    updates.forEach((update) => reading[update] = req.body[update]);
    await reading.save();
    res.status(202).send('Reading updated');
  } catch (err) {
    res.status(400).send(err);
  };
});


//POST new reading to history
router.put('/reading', auth, async (req, res) => {
  console.log(req.user);
  const userId = req.user._id;
  const requiredFields = [ 'cardsDealt' ];
  const missingFields = requiredFields.find(field => !(field in req.body));

  if (missingFields){
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Missing field',
      location: missingFields,
    });
  }

  //ensure comments and query are string
  const stringFields = [ 'comments', 'query' ];
  console.log(typeof(req.body.comments));
  console.log(typeof(req.body.query));
  const nonStringFields = stringFields.find(field => field in req.body && typeof req.body[field] !== 'string'
  );
  if (nonStringFields){
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Expected string field',
      location: nonStringFields,
    });
  }

  //ensure there are cards in cardsDealt
  if (!req.body.cardsDealt || req.body.cardsDealt.length<1){
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'No cards in cardsDealt',
      location: req.body.cardsDealt,
    });
  }
  console.log(userId);
  const toUpdate = new Reading({
    userId,
    ...req.body
  });
  try {
    console.log(userId);
    const user = await User.findOne({_id: userId})
    if (!user) {
      return res.status(404).send()
    }

    await User.updateOne({_id: userId}, 
      {$push:{history: toUpdate}}, 
      {new: true}
      )
    return res.status(201).json(user.history);
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'Internal server error'})
  }
});

module.exports={router};
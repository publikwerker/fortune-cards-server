'use strict';
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('../config');
const router = express.Router();
const {User} = require('../users/models.js');
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
  const authToken = createAuthToken(req.user.serialize());
  console.log(authToken);
  return res.json({authToken})
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
  console.log(username);
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


//PUT new reading to history
router.put('/', jwtAuth, (req, res) => {
  console.log(req);
  console.log(req.body);
  const requiredFields = [ 'username', 'cardsDealt' ];
  const missingFields = requiredFields.find(field => !(field in req.body));

  if (missingFields){
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Missing field',
      location: missingFields,
    });
  }
  
  const username = req.body.username;

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

  const toUpdate = {
    ...req.body
  };

  console.log(toUpdate);
  User.findOne({username: username})
    .then(() => {
      return User.updateOne({username: username}, 
        {$push:{history: toUpdate}}, 
        {new: true}
      );
    })
    .then(user => {
      return res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'Internal server error'})
    });
});

module.exports={router};
'use strict';
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const config = require('../config');
const router = express.Router();
const {User} = require('../users/models.js');

const createAuthToken = function(user) {
  return jwt.sign({user}, config.JWT_SECRET, {
    subject: user.username,
    expiresIn: config.JWT_EXPIRY,
    algorithm: 'HS256'
  });
};

const localAuth = passport.authenticate('local', {session: false});
router.use(bodyParser.json());

router.post('/login', localAuth, (req, res) => {
  const authToken = createAuthToken(req.user.serialize());
  res.json({authToken});
});

const jwtAuth = passport.authenticate('jwt', {session: false});

router.post('/refresh', jwtAuth, (req, res) => {
  const authToken = createAuthToken(req.user);
  res.json({authToken});
});

//PUT new reading to history
router.put('/:id', jwtAuth, (req, res) => {
  const thisUser = req.params.id;

  const toUpdate = {};
  const updateableFields = [ 'date', 'comments', 'spread'];

  updateableFields.forEach(field => {
    if (field in req.body){
      toUpdate[field] = req.body[field];
    }
  });

  console.log(toUpdate);
  User.findOneAndUpdate({username: thisUser})
    .then(user => {if (!user.history){
      console.log("doesn't exist");
      return User.update({username: thisUser}, {
        $set: { history: toUpdate}
    }, {new: true},   (err, user) => {
      // Handle any possible database errors
      if (err) return res.status(500).send(err);
      return res.send(user);
    })
  } else {
    console.log('does exist');
    return User.update({username: thisUser}, {
      $push:{history: {toUpdate}},
    }, {new: true},)
  }
  })
  .then(result => {
    if (result) {
      res.json(result);
    } else {
      next();
    }
  })
  .catch(err => {
    next(err);
  });

});

module.exports={router};
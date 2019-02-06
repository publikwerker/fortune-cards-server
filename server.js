'use strict';
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const { CLIENT_ORIGIN, PORT , DATABASE_URL } = require('./config');
const {deck} = require('./tarotDeck.js');
const { router: usersRouter } = require('./users');

mongoose.Promise = global.Promise;

const app = express();
app.use(morgan('common'));

app.use(
  cors({
    origin:CLIENT_ORIGIN
  })
);

app.use('/api/users', usersRouter);

app.get('/api/tarotDeck', (req ,res) => {
  console.log(deck);
  res.json(deck);
});

//POST /api/users/ to request to register a new user

//POST /api/auth/login to request a JWT

//GET /api/protected

//POST /api/auth/refresh

// app.listen(PORT, () => {console.log(`server is running on port ${PORT}`)});

let server;

function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL,{useNewUrlParser: true}, err => {
      if (err) {
        return reject(err);
      }
      server = app
        .listen(PORT, () => {
          console.log(`Your app is listening on port ${PORT}`);
          resolve();
        })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };
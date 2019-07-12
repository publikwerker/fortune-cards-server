'use strict';
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const chalk = require('chalk');

const { CLIENT_ORIGIN, PORT , DATABASE_URL } = require('./config');
const {deck} = require('./tarotDeck.js');
const { router: usersRouter } = require('./users');
const { router: authRouter, localStrategy, jwtStrategy } = require('./auth');

mongoose.Promise = global.Promise;

const app = express();
app.use(morgan('common'));
app.use(
  cors({
    origin:CLIENT_ORIGIN
  })
);

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/users/', usersRouter);
app.use('/auth/', authRouter);

const jwtAuth = passport.authenticate('jwt', {session: false});

app.get('/tarotDeck', (req ,res) => {
  console.log(chalk.blue.inverse.bold(`Deck Loaded`));
  res.json(deck);
});

app.use('*', (req, res) => {
  return res.status(404).json({message: 'Not Found'});
});

let server;

function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL,{useNewUrlParser: true}, err => {
      if (err) {
        return reject(err);
      }
      server = app
        .listen(PORT, () => {
          console.log(chalk.green.inverse.bold(`Your app is listening on port ${PORT}`));
          resolve();
        })
        .on('error', err => {
          console.log(chalk.red.inverse(`Error: ${err}`));
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log(chalk.green.inverse.bold('Closing server'));
      server.close(err => {
        if (err) {
          console.log(chalk.red.inverse(`Error: ${err}`));
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
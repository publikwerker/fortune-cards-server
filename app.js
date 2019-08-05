'use strict';
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const chalk = require('chalk');

const { CLIENT_ORIGIN } = require('./config');
const {deck} = require('./tarotDeck.js');
const { router: usersRouter } = require('./users');
const { router: authRouter, localStrategy, jwtStrategy } = require('./auth');

mongoose.Promise = global.Promise;

const app = express();

app.use(morgan('common'));
app.use(cors({origin:CLIENT_ORIGIN}));

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/users/', usersRouter);
app.use('/auth/', authRouter);

app.get('/tarotDeck', (req ,res) => {
  console.log(chalk.blue.inverse.bold(`Deck Loaded`));
  res.json(deck);
});

app.use('*', (req, res) => {
  return res.status(404).json({message: 'Not Found'});
});

module.exports = app;
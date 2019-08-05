const app = require('./app');
const chalk = require('chalk');
const mongoose = require('mongoose');
const { PORT , DATABASE_URL } = require('./config');

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
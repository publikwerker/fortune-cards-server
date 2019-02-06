const express = require('express');
const cors = require('cors');
const { CLIENT_ORIGIN, PORT } = require('./config');
const {deck} = require('./tarotDeck.js');

const app = express();

app.use(
  cors({
    origin:CLIENT_ORIGIN
  })
);

app.get('/api/tarotDeck', (req ,res) => {
  console.log(deck);
  res.json(deck);
});

app.listen(PORT, () => {console.log(`server is running on port ${PORT}`)});
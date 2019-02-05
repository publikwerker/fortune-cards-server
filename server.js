const express = require('express');
const cors = require('cors');
const { CLIENT_ORIGIN, PORT } = require('./config');
import deck from './tarotDeck.js';

const app = express();

app.use(
  cors({
    origin:CLIENT_ORIGIN
  })
);

app.get('/api/tarotDeck', (req ,res) => {
  res.json(deck);
});

app.listen(PORT, () => {console.log(`server is running on port ${PORT}`)});
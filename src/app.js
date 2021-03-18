const express = require('express');
const axios = require('axios');
const getQuote = require('./getQuote');

const app = express();

// app.get('/', (req, res) => {
//   let url = 'https://sv443.net/jokeapi/v2/joke/Programming?type=single&blacklistFlags=nsfw';

//   const q = req.query.q;
//   if (q) {
//     url += '&contains=' + q;
//   }

//   axios.get(url)
//     .then(response => {
//       res.status(200).send(response.data.joke);
//     })
//     .catch(err => {
//       res.status(400).send(err);
//     });
// });

app.get('/', (req, res) => {
  getQuote(req.query.q)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

module.exports = app;
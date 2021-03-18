const axios = require('axios');

function getQuote(query_param = '') {
  let url = 'https://sv443.net/jokeapi/v2/joke/Programming?type=single&blacklistFlags=nsfw';

  if (query_param) {
    url += '&contains=' + query_param;
  }

  return axios.get(url)
    .then(response => {
      return Promise.resolve(response.data.joke);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

module.exports = getQuote;
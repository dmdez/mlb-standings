var request = require('request');

module.exports = function (req, res) {
  request({
    url: 'https://erikberg.com/mlb/standings.json',
    headers: {
      'User-Agent': 'MLBStandings/1.0 (dmmendez@gmail.com)'
    }
  }, function (error, response, body) {
    res.setHeader('Content-Type', 'application/json');
    res.send(body);
  })
};

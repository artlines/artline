module.exports = (method, options, done) => {
  const TOKEN = '0b979af4f3f169267c44c6065b22c7cba881f7dde0fb655db440ca4163660c0a67f28fe83d8e271218a84';
  const URL = 'https://api.vk.com/method/';
  const API_VER = '5.64';
  const https = require('https');
  const querystring = require('querystring');
  const parameters = querystring.stringify(options);
  const query = `${parameters}&access_token=${TOKEN}&v=${API_VER}`;

  https.get(`${URL+method}?${query}`, (res) => {
    const { statusCode } = res;
    let rawData = '';
    if (statusCode !== 200) {
      done(error.message);
      res.resume();
      return;
    }
    res.setEncoding('utf8');
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
      let data = JSON.parse(rawData);
      done(null, data);
    });
  }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
  });
};
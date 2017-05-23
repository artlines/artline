const TOKEN = '0b979af4f3f169267c44c6065b22c7cba881f7dde0fb655db440ca4163660c0a67f28fe83d8e271218a84';
const URL = 'https://api.vk.com/method/';
const API_VER = '5.64';
const http = require('http');
const querystring = require('querystring');



function requestToApiVk(method, params) {
  const parameters = querystring.stringify(params);
  const query = `${parameters}&access_token=${TOKEN}&v=${API_VER}`;

  http.get(`${URL+method}?${query}?`, (res) => {
    const { statusCode } = res;

    let error;
    if (statusCode !== 200) {
      error = new Error(`Request Failed.\n` +
        `Status Code: ${statusCode}`);
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      return;
    }
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
          console.error(e.message);
        }
      });
  }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
  });
  return parsedData;
}




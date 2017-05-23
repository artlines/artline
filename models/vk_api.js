const TOKEN = '0b979af4f3f169267c44c6065b22c7cba881f7dde0fb655db440ca4163660c0a67f28fe83d8e271218a84';
const URL = 'https://api.vk.com/method/';
const API_VER = '5.64';
const https = require('https');
const querystring = require('querystring');

function requestToApiVk(method, options) {
  const parameters = querystring.stringify(options);
  const query = `${parameters}&access_token=${TOKEN}&v=${API_VER}`;
  let data = {};

    https.get(`${URL+method}?${query}`, (res) => {
    const { statusCode } = res;

    let error;
    let rawData = '';
    if (statusCode !== 200) {
      error = new Error(`Request Failed.\n` +
        `Status Code: ${statusCode}`);
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      return;
    }
    res.setEncoding('utf8');
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
        data = parsedData;
      } catch (e) {
          console.error(e.message);
        }
      });
  }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
  });
}

module.exports.getAllGroups = (done) => {
  const options = {
    'user_id':'253848163',
    'count':5,
    'extended':1,
    //'fields': 'city, country, place, description, wiki_page, members_count, counters, start_date, finish_date, can_post, can_see_all_posts, activity, status, contacts, links'
  };
  let data = requestToApiVk('groups.get', options);
  done(null, data);
}
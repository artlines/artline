let db = require('../db');
let vk = require('./vk_api');

let getByKeys = (done) => {
  //обращение к vk api
  //приватный метод для авторизации vk, сохранение токена с неограниченыйм сроком  https://vk.com/dev/first_guide, open api
};

let getAllGroups = (done) => {
  const options = {
    'user_id':'253848163',
    'extended':1,
    'fields': 'city,country,place,description,members_count,start_date,finish_date,activity,status,contacts,links',
    'filter':'events'
  };
  vk('groups.get', options, (err, data) => {
    if(err) done(err);
    done(null, data);
  });
}

let methods = {getByKeys, getAllGroups};
module.exports = methods;
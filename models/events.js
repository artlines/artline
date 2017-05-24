var db = require('../db');
var vk = require('./vk_api');


module.exports.getByKeys = (done) => {
  //обращение к vk api
  //приватный метод для авторизации vk, сохранение токена с неограниченыйм сроком  https://vk.com/dev/first_guide, open api
};

module.exports.getAllGroups = (done) => {
  const options = {
    'user_id':'253848163',
    'extended':1,
    'fields': 'city,country,place,description,members_count,start_date,finish_date,activity,status,contacts,links',
    'filter':'events'
  };
  vk.requestToApiVk('groups.get', options, (data) => done(null, data));
}
var express = require('express');
var router = express.Router();
var events = require('../models/vk_api');

/** GET events listing.
 *@todo - форма поиска и подставление значений по user_id
 *@todo - допил регистрации/авторизации и получение данных предыдущего поиска из базы
 * (ранее Вы искали, повторить поиск)
 * При первом поиске - автоматическая регистрация с письмом о подтверждении, генерацией пароля
 * если есть авторизация через вк - возможность добавить событие в список, получать уведомления из вк и т.п.
 * Можно поискать без регистрации (анонимный поиск в базе)
 * */
router.get('/', function(req, res, next) {
  //form + events.getByUserId (session_id === user_id)
  events.getAllGroups(function (err, result) {
    if(err) console.log(err);
    //res.render('events', {title: 'Yeah, artline', users: result});
    res.send(result);

  });
});

router.post('/get', function(req, res, next) {
  //events.getByKeys + list render + events.create
});

router.post('/set', function(req, res, next) {
  //events.set перебор и добавление в избранное с оповещением
});

router.get('/get/:id', function(req, res, next) {
  //get all description of event in modal
});

module.exports = router;

/*
* В модели:
*   - получение событий юзера
*   - обращение к vk api, запись результатов в базу
 *  - добавление выбранных отдельно
 *
 *
 *  Первоначально - форма и получение событий с версткой и прелоадом, затем всё остальное
 *  */
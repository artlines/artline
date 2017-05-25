var express = require('express');
var router = express.Router();
var events = require('../models/events');

/** GET events listing.
 *@todo - форма поиска и подставление значений по user_id
 *@todo - допил регистрации/авторизации и получение данных предыдущего поиска из базы
 * (ранее Вы искали, повторить поиск)
 * При первом поиске - автоматическая регистрация с письмом о подтверждении, генерацией пароля
 * если есть авторизация через вк - возможность добавить событие в список, получать уведомления из вк и т.п.
 * Можно поискать без регистрации (анонимный поиск в базе)
 * */
router.get('/', (req, res, next) => {
    res.render('events', {title: 'Choose your destiny', events: result});
});

router.get('/groups', (req, res, next) => {
  //form + events.getByUserId (session_id === user_id)
  events.getAllGroups( (err, result) => {
    if(err) console.log(err);
    res.render('groups', {title: 'Yeah, artline', events: result});
  });
});

router.post('/get', (req, res, next) => {
  //events.getByKeys + list render + events.create
});

router.post('/set', (req, res, next) => {
  //events.set перебор и добавление в избранное с оповещением
});

router.get('/get/:id', (req, res, next) => {
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
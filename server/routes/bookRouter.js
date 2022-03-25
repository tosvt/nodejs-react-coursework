const Router = require('express') // получаем Router из express
const router = new Router // создаем объект роутера

router.post('/',) //для создания книг
router.get('/',) //для получения книг
router.get('/:id',) //для получения конкретного книги

module.exports = router // экспортируем роутер
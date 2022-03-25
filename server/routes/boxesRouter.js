const Router = require('express') // получаем Router из express
const router = new Router // создаем объект роутера

router.post('/',) //для создания боксов
router.get('/',) //для получения боксов
router.get('/:id',) //для получения конкретного бокса

module.exports = router // экспортируем роутер
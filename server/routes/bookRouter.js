const Router = require('express') // получаем Router из express
const router = new Router // создаем объект роутера
const bookController = require('../controllers/bookController')

router.post('/', bookController.create) //для создания книг
router.get('/', bookController.getAll) //для получения книг
router.get('/:id', bookController.getOne) //для получения конкретного книги

module.exports = router // экспортируем роутер
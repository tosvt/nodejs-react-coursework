const Router = require('express') // получаем Router из express
const router = new Router // создаем объект роутера
const boxesController = require('../controllers/boxesController')

router.post('/', boxesController.create) //для создания боксов
router.get('/', boxesController.getAll) //для получения боксов
router.get('/:id', boxesController.getOne) //для получения конкретного бокса

module.exports = router // экспортируем роутер
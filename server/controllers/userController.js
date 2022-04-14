const ApiError = require('../error/ApiError');
class UserController {
    async registration(req, res){

    }
    
    async login(req, res){
        
    }

    async check(req, res, next){
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest('ID не задан'))
        }
        res.json(id) // получение id
        // const query = req.query // получение всех переданных параметров
        // res.json(query)
        // res.json('lsdjflsjf') проверка работы
    }
}

module.exports = new UserController() // экспорт объект из этого класса
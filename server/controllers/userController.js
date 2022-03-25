class UserController {
    async registration(req, res){

    }
    
    async login(req, res){
        
    }

    async check(req, res){
        const {id} = req.query
        res.json(id) // получение id
        // const query = req.query // получение всех переданных параметров
        // res.json(query)
        // res.json('lsdjflsjf') проверка работы
    }
}

module.exports = new UserController() // экспорт объект из этого класса
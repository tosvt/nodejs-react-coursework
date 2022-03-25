require('dotenv').config()
const express = require('express') //импортируем express
const sequelize = require('./db') // импортируем файл db
const models = require('./models/models') // импортируем модели
const PORT = process.env.PORT || 5000

const app = express()//создаем объект, вызвав функцию express, с него начинается запуск приложения

const start = async () => { // старт работы с бд
    try{
        await sequelize.authenticate() // установка подключения к бд
        await sequelize.sync() // сверяет состояние бд со схемой
        app.listen(PORT, () => console.log(`Server startup on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()


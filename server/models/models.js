// описание моделей данных

const sequelize = require('../db') //импорт объекта sequelize
const {DataTypes} = require('sequelize') // импорт класса DataTypes из пакета

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Applications = sequelize.define('applications', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    completed: {type: DataTypes.STRING, defaultValue: 'NO'},
})

const Boxes = sequelize.define('boxes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    box_size: {type: DataTypes.STRING, allowNull: false},
    availability: {type: DataTypes.STRING, defaultValue: "NO"},
    price: {type: DataTypes.STRING, allowNull: false},
    location: {type: DataTypes.STRING, allowNull: false},
})

const Books = sequelize.define('books', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    quantity: {type: DataTypes.INTEGER, defaultValue: 0},
    price: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Basket_Book = sequelize.define('basket_book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Applications)
Applications.belongsTo(User)

Applications.hasOne(Boxes)
Boxes.belongsTo(Applications)

Basket.hasMany(Basket_Book)
Basket_Book.belongsTo(Basket)

Basket_Book.hasOne(Books)
Books.belongsTo(Basket_Book)

// экспорт созданных моделей
module.exports = {
    User, 
    Basket,
    Basket_Book,
    Applications,
    Boxes,
    Books
}
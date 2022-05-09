import {makeAutoObservable} from "mobx";

export default class BooksStore { // экспорт одноименного класса, работа с Mobx
    constructor(){
        this._boxes = [
            {id: 1, box_size: 'MD', availability: 'Yes', price: '4900 Руб/мес', location: 'Москва'},
            {id: 2, box_size: 'LG', availability: 'No', price: '6900 Руб/мес', location: 'Москва'}   
        ]
        this._applications = [
            {id: 1, completed: 'Yes'},
            {id: 2, completed: 'No'}   
        ]
        this._books = [
            {id: 1, title: 'Властелин Колец | Толкин Джон', quantity: 30, price: '1499 Руб', img: 'https://cdn1.ozone.ru/s3/multimedia-o/wc1200/6054778452.jpg'},
            {id: 2, title: 'Алиса в стране Чудес | Кэрролл Льюис', quantity: 50, price: '1699 Руб', img: 'https://cdn1.ozone.ru/s3/multimedia-9/wc1200/6041287689.jpg'},
            {id: 3, title: '1984 | Джордж Оруэлл', quantity: 10, price: '999 Руб', img: 'https://cdn1.ozone.ru/s3/multimedia-s/6008331328.jpg'},
            {id: 4, title: 'Маленький принц | Антуан де Сент-Экзюпери', quantity: 21, price: '1099 Руб', img: 'https://www.moscowbooks.ru/image/book/602/orig/i602996.jpg'},
            {id: 5, title: 'Граф Монте-Кристо | Александр Дюма', quantity: 30, price: '2499 Руб', img: 'https://cdn1.ozone.ru/s3/multimedia-4/6017741056.jpg'},
            {id: 6, title: 'Приключения Шерлока Холмса | Артур Конан Дойл', quantity: 40, price: '1899 Руб', img: 'https://www.moscowbooks.ru/image/book/604/orig/i604540.jpg'}
        ]
        makeAutoObservable(this) // при изменении переменных они будут обновляться
    }

    setBoxes(boxes) { // фукнция, изменяющая состояние 
        this._boxes = boxes
    }

    //action для изменения пользователя
    setApplications(applications) { // фукнция, изменяющая состояние 
        this._applications = applications
    }
    
    //action для изменения пользователя
    setBooks(books) { // фукнция, изменяющая состояние 
        this._books = books
    }

    //геттер для получения состояния
    get boxes() {
        return this._boxes
    }

    get applications() {
        return this._applications
    }

    get books() {
        return this._books
    }
}
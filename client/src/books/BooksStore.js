import {makeAutoObservable} from "mobx";

export default class BooksStore { // экспорт одноименного класса, работа с Mobx
    constructor(){
        this._boxes = []
        this._applications = []
        this._books = []
        this._selectedBox = {}
        makeAutoObservable(this) // при изменении переменных они будут обновляться
    }

    setBoxes(boxes) { // фукнция, изменяющая состояние 
        this._boxes = boxes
    }

    setSelectedBox(box){
        this._selectedBox = box 
    }

    //action для изменения 
    setApplications(applications) { // фукнция, изменяющая состояние 
        this._applications = applications
    }
    
    //action для изменения 
    setBooks(books) { // фукнция, изменяющая состояние 
        this._books = books
    }

    //геттер для получения состояния
    get boxes() {
        return this._boxes
    }

    get selectedBox() {
        return this._selectedBox
    }

    get applications() {
        return this._applications
    }

    get books() {
        return this._books
    }
}
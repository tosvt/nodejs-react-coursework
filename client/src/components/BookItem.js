import React from "react";
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { BOOKPAGE_ROUTE } from "../utils/consts";

const BookItem = ({book}) => {
    const history = useHistory() // динамическое передвижение по страницам
    console.log(history)
    // отрисовка элемента, картинка, текст
    return (
        <Col md={3} className="mt-5" onClick={() => history.push(BOOKPAGE_ROUTE + '/' + book.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={200} src={book.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Кол: {book.quantity}</div>
                    <div className="d-flex align-items-center">
                        <div>{book.price}</div>
                    </div>
                   
                    
                </div>
                <div>{book.title}</div>
            </Card>
        </Col>
    );
};

export default BookItem;
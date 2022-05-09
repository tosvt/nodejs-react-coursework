import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const BookPage = () => {
    const book = {id: 1, title: 'Властелин Колец | Толкин Джон', quantity: 30, price: '1499 Руб', img: 'https://cdn1.ozone.ru/s3/multimedia-o/wc1200/6054778452.jpg'}
            
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={400} src={book.img}/>
                </Col>
                <Col md={5}>
                    <Row>
                        <h2>{book.title}</h2>
                        <div 
                            className="d-flex align-items-center justify-content-center"
                            >
                            {book.quantity}
                            {book.price}
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default BookPage;
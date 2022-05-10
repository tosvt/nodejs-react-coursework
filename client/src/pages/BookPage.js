import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


const BookPage = () => {
    const book = { id: 1, title: 'Властелин Колец | Толкин Джон', quantity: 30, price: '1499 Руб', img: 'https://cdn1.ozone.ru/s3/multimedia-o/wc1200/6054778452.jpg' }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={400} src={book.img} />
                </Col>
                <Col md={8}>
                    <Row>
                    <div
                            className="d-flex flex-column" 
                        >
                        <h2>{book.title}</h2>
                        
                            {/* {book.quantity}
                            {book.price} */}
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Количество</th>
                                        <th>Стоимость</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>30 шт.</td>
                                        <td>{book.price * 30}</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>50 шт.</td>
                                        <td>{book.price * 30}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>100 шт.</td>
                                        <td>{book.price * 30}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </Col>
                {/* <Col md={3}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{ width: 300, height: 300, border: '5px solid light' }}
                    >
                        <h3>Цена</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col> */}
            </Row>
        </Container>
    );
};

export default BookPage;
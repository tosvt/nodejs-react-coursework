import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useHistory, useParams } from 'react-router-dom';
import { deleteBook, fetchOneBoook } from '../http/bookAPI';
import { BOOKS_ROUTE } from '../utils/consts';
import ChangeBook from '../components/modals/ChangeBook';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const BookPage = observer(() => {
    const [book, setBooks] = useState(true) // с помощью хука создаем локальное состояние
    const history = useHistory() // динамическое передвижение по страницам
    const {user} = useContext(Context);
    
    //получаем параметры строки запроса
    const { id } = useParams()
    const [bookChangeVisible, setBookChangeVisible] = useState(false)
    //подргруажем единожды книгу
    useEffect(() => {
        fetchOneBoook(id).then(data => setBooks(data))
    }, [])

    const onDeleteBook = () => {
        deleteBook(id).then(() => {
            history.push(BOOKS_ROUTE);
        })
    };

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={400} src={process.env.REACT_APP_API_URL + book.img} />
                </Col>
                <Col md={8}>
                    <Row>
                        <div
                            className="d-flex flex-column"
                        >
                            <h2>{book.title}</h2>
                            {user.isAuth && <Button
                                variant={"outline-success"}
                                className="mb-3"
                                onClick={() => setBookChangeVisible(true)}
                            >
                                Редактировать книгу
                            </Button> }
                            
                            {user.isAuth && <Button
                                variant={"outline-danger"}
                                onClick={() => onDeleteBook(id)}
                            >
                                Удалить книгу
                            </Button> }
                            <br/>
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
                                        <td>{book.price * 30} Руб</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>50 шт.</td>
                                        <td>{book.price * 50} Руб</td>

                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>100 шт.</td>
                                        <td>{book.price * 100} Руб</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </Col>
                <ChangeBook show={bookChangeVisible} onHide={() => setBookChangeVisible(false)}/>
            </Row>
        </Container>
    );
});

export default BookPage;
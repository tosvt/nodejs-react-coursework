import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
//import { Context } from '..';
import BookList from '../components/BookList';
//import { fetchBooks } from '../http/boxAPI';

const Books = observer(() => {
    // const {book} = useContext(Context)
    // //единожды при откртии страницы с книгами подгружаем массив
    // useEffect(() => {
    //     fetchBooks 
    // }, [])
    return (
        <Container>
            <Row>
                <Col>
                    <BookList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Books;
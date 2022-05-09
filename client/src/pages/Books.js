import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BookList from '../components/BookList';

const Books = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <BookList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Books;
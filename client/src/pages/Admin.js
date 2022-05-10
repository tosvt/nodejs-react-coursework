import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBook from '../components/modals/CreateBook';
import CreateBox from '../components/modals/CreateBox';

const Admin = () => {
    // два состояния, отвечающие за то, видим ли мы модокно или нет
    const [bookVisible, setBookVisible] = useState(false)
    const [boxVisible, setBoxVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-secondary"} 
                className="mt-4 p-2"
                onClick={() => setBookVisible(true)}
                >
                Добавить книгу
            </Button>
            <Button 
                variant={"outline-secondary"} 
                className="mt-4 p-2"
                onClick={() => setBoxVisible(true)}
                >
                Добавить бокс
            </Button>
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
            <CreateBox show={boxVisible} onHide={() => setBoxVisible(false)}/>
        </Container>
    );
};

export default Admin;
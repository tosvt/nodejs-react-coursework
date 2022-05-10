import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <Button>
                Добавить заявку
            </Button>
            <Button>
                Добавить бокс
            </Button>
        </Container>
    );
};

export default Admin;
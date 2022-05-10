import React, { useContext } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Context } from "../..";

const CreateBook = ({ show, onHide }) => {
    const {book} = useContext(Context)
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить книгу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название и автора книги"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите количество"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите стоимость"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Выберите обложку"
                        type="file"
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBook;
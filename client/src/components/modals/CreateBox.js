import React, { useContext, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Context } from "../..";

const CreateBox = ({ show, onHide }) => {
    const {box} = useContext(Context)
    // создаем состояние для каждого инпута
    const [box_size, setSize] = useState('')
    //const [availability, setQuantity] = useState(0)
    const [price, setPrice] = useState('0')
    const [location, setLocation] = useState(null)

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить бокс
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Введите бокс"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBox;
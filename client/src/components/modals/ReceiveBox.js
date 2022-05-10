import React, { useContext } from "react";
import { Dropdown, Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Context } from "../..";

const ReceiveBox = ({ show, onHide }) => {
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
                    Заказ бокса
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите размер</Dropdown.Toggle>
                        <DropdownMenu>
                            {book.boxes.map(box =>
                                <Dropdown.Item key={box.id}>{box.box_size} ({box.price})</Dropdown.Item>
                            )}
                        </DropdownMenu>
                   </Dropdown>
                   <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите локацию</Dropdown.Toggle>
                        <DropdownMenu>
                            {book.boxes.map(box =>
                                <Dropdown.Item key={box.id}>{box.location}</Dropdown.Item>
                            )}
                        </DropdownMenu>
                   </Dropdown>
                   <Form.Control
                        className="mt-3"
                        placeholder="Введите Ваше ФИО"
                   />
                   <Form.Control
                        className="mt-3"
                        placeholder="Введите Ваш E-mail"
                        type="email"
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

export default ReceiveBox;
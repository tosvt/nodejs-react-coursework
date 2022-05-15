import {Button, Nav} from "react-bootstrap";
import React, {useContext, useState} from "react";
import {Context} from "../../../index";
import CreateBook from "../../modals/CreateBook";
import { useHistory } from "react-router-dom";
import { APPLICATIONS_ROUTE } from "../../../utils/consts";


const TrueAuth = () => {
    const {user} = useContext(Context);
    const history = useHistory()
    const [bookVisible, setBookVisible] = useState(false)
    const [boxVisible, setBoxVisible] = useState(false)

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
    }



    return (
        <Nav className="ml-auto" style={{color: "white"}}>
            {user.isAuth && <Button
                className={"mr-2"}
                variant={"outline-light"}
                onClick={() => {setBookVisible(true)}}
            >
                Добавить книгу
            </Button>}
            {user.isAuth && <Button
                className={"mr-2"}
                variant={"outline-light"}
                onClick={() => history.push(APPLICATIONS_ROUTE)}
            >
                Заказы
            </Button>}

            <Button
                variant={"outline-light"}
                className="ml-2"
                onClick={() => logOut()}
            >
                Выйти
            </Button>
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
        </Nav>
    );
};

export default TrueAuth;
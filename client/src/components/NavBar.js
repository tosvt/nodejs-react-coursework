import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { NavLink } from 'react-router-dom';
import { BOOKS_ROUTE } from '../utils/consts';
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const { user } = useContext(Context) // в зависимости от того, авторизован пользователь - navbar будет отображаться по разному

    // если пользователь авторизован - первый блок, иначе второй
    return (
        <Navbar bg="info" variant="light">
            <Container>
            <NavLink style={{color:'white'}} to={BOOKS_ROUTE}>SafeBooks</NavLink>
            {user.isAuth ? <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant={"outline-light"}>Админ панель</Button>
                <Button variant={"outline-light"} className="ml-2">Войти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
            }
            </Container>
        </Navbar>
    );
});

export default NavBar
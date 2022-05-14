import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { NavLink } from 'react-router-dom';
import { ABOUT_ROUTE, ADMIN_ROUTE, BOOKS_ROUTE, BOXES_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useHistory } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context) // в зависимости от того, авторизован пользователь - navbar будет отображаться по разному
    const history = useHistory()
    //фукнция выхода
    const logOut = () => {
        user.setUser({}) //присваиваем setUser пустой объект
        user.setIsAuth(false)
        localStorage.removeItem('token') // удаляем токен
    }

    // если пользователь авторизован - первый блок, иначе второй
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="light">
            <Container>
                <NavLink style={{ color: 'white', fontSize: '20px'}} to={BOOKS_ROUTE}>SafeBooks</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto pl-5">
                        <NavLink style={{ color: 'white', display: 'block', marginLeft: '20px' }} to={BOXES_ROUTE}>Заказать бокс</NavLink>
                        <NavLink style={{ color: 'white', display: 'block', marginLeft: '20px'}} to={ABOUT_ROUTE}>О сайте</NavLink>
                        <NavLink style={{ color: 'white', display: 'block', marginLeft: '20px'}} to={CONTACTS_ROUTE}>Контакты</NavLink>
                    </Nav>
                    <Nav>
                        {user.isAuth && user.User.role === "ADMIN" ? <Nav className="ml-auto" style={{ color: 'white' }}>
                            <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
                            <Button variant={"outline-light"} onClick={() => logOut()} className="ml-2">Выйти</Button>
                        </Nav>
                            :
                            <Nav className="ml-auto" style={{ color: 'white' }}>

                                <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                            </Nav>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>




        // <Navbar bg="info" variant="light">
        //     <Container>
        //     <NavLink style={{color:'white'}} to={BOOKS_ROUTE}>SafeBooks</NavLink>
        //     {user.isAuth ? <Nav className="ml-auto" style={{color:'white'}}>
        //         <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
        //         <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)} className="ml-2">Выйти</Button>
        //     </Nav>
        //     :
        //     <Nav className="ml-auto" style={{color:'white'}}>

        //         <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
        //     </Nav>
        //     }
        //     </Container>
        // </Navbar>
    );
});

export default NavBar
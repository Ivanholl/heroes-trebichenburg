import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Header() {
    const user = useSelector(state => state.userReducer.user);

    return (<Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as:
                <a> {user.username} </a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>)
}

export default Header;

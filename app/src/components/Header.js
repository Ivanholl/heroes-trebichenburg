import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Header() {
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
                <a href="#login">Mark Otto</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>)
}

export default Header;

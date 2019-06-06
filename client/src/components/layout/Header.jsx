import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

class Header extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Navbar bg="dark" expand="lg">
                    <Link className="navbar-brand text-light" to="/">DampGang</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link text-light" to="/members">Members</Link>
                            <Link className="nav-link text-light" to="/servers">Servers</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default Header;
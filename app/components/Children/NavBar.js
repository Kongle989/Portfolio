import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
export const NavBar = () => {
    return (
        <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <LinkContainer to="/">
                        <div className="loading">Site under construction</div>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/aboutme"><NavItem eventKey={1}>About Me</NavItem></LinkContainer>
                <LinkContainer to="/myskills"><NavItem eventKey={2}>My Skills</NavItem></LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
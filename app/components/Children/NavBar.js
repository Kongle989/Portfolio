import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#"><div className="loading">Site under construction</div></a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            {/*<Navbar.Collapse>*/}
                {/*/!*<Nav>*!/*/}
                    {/*/!*<NavItem eventKey={1} href="#">Link</NavItem>*!/*/}
                    {/*/!*<NavItem eventKey={2} href="#">Link</NavItem>*!/*/}
                {/*/!*</Nav>*!/*/}
            {/*</Navbar.Collapse>*/}
        </Navbar>
    )
};

module.exports = NavBar;
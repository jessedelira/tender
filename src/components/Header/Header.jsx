import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './header.css';
const Header = () => {


    return(
        <div className="App">
        <Navbar bg="dark" variant="dark" sticky="dark">
            <Navbar.Brand>
                <a id="tender_logo" href="/">
                    <img src="chicken.png" width="40px" height="40px" id="chicken-logo" alt="chicken logo"/>
                    <label htmlFor="chicken" id="tender_text">Tender</label>
                </a>
            </Navbar.Brand>

            <Nav>
                <Nav.Link href="/SignIn">Profile</Nav.Link>
                <Nav.Link href="">Search</Nav.Link>
                <Nav.Link href="/topTen">Top Ten</Nav.Link>
            </Nav>
        </Navbar>
        </div>
    )
}

export default Header;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
const Header = () => {


    return(
        <div className="App">
        <Navbar bg="dark" variant="dark" sticky="dark">
            <Navbar.Brand href="/">
                <img src="chicken.png" width="40px" height="40px" id="chicken-logo" alt="chicken logo"/>
                <label htmlFor="chicken">Tender</label>
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
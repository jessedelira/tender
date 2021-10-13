import React from 'react';
import { Navbar } from 'react-bootstrap';
const Header = () => {


    return(
        <div className="App">
        <Navbar bg="dark" variant="dark" sticky="dark">
            <Navbar.Brand>
                <img src="chicken.png" width="40px" height="40px" id="chicken-logo" alt="chicken logo"/>
                <label htmlFor="chicken">Tender</label>
            </Navbar.Brand>
        </Navbar>
        </div>
    )
}

export default Header;
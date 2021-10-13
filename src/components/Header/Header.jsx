import React from 'react';
import { Navbar } from 'react-bootstrap';
const Header = () => {


    return(
        <div className="App">
        <Navbar bg="dark" variant="dark" sticky="dark">
            <Navbar.Brand>
                <img src="https://cdn-icons.flaticon.com/png/512/2936/premium/2936419.png?token=exp=1634158927~hmac=97396b172d9953dc4096f133337a7777" width="40px" height="40px" alt="chicken"></img>
            </Navbar.Brand>
        </Navbar>
        </div>
    )
}

export default Header;
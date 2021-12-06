import React from 'react'
import {Button} from 'react-bootstrap';
import RestInfo from './components/RestInfo';
import './RestProfile.css';
const RestProfile = () => {
    return (
        <div className="container">
            <div className="row" id="row-header">
                
                <div className="col" id='col-header'>
                    <img src="https://cdn.localdatacdn.com/in/fort-wayne/3442316/original/z01zz03dGk.jpg" id="header-img"alt="" /> 
                </div>
                <RestInfo></RestInfo>

            </div>
        </div>
    )
}

export default RestProfile

import React from 'react'
import {Button} from 'react-bootstrap';
import RestInfo from './components/RestInfo';
const RestProfile = () => {
    return (
        <div className="container">
            <div className="row" id="row-header">
                
                <div className="col">
                    <h1>Restaruant Name</h1>
                    <h3>Food genre</h3>
                    <h4>Stars: / amount of reviews</h4>
                    
                </div>
                <RestInfo></RestInfo>
            </div>
        </div>
    )
}

export default RestProfile

import React from 'react'
import {Button} from 'react-bootstrap';

const RestInfo = () => {
    return (
        <div>
             <div className="row">
                <div className="col">
                    <Button>Write a Review</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <h1>Location Hours</h1>
                </div>
                <div className="col-lg-12">
                    <h1>About the Business</h1>
                    <p>Info about the Restaruant</p>
                    
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>Recommended Reviews</h1>
                    
                </div>
            </div>
        </div>
    )
}

export default RestInfo

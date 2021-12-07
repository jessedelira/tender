import React from 'react'
import {Button} from 'react-bootstrap';
import Review from '../../Profile/components/Review';


const RestInfo = () => {
    return (
        <div>
             <div className="row">
                <div className="col">
                    
                    <Button>Write a Review</Button>
                    <Button>Direction</Button>
                    <Button>Share</Button>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <h1>Location</h1>
                <h3>google map goes here</h3>
                </div>
                <div className="col-lg-12">
                    <h1>About the Business</h1>
                    <p>Info about the Restaruant</p>
                    
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>Latest Reviews</h1>
                    <div>
                        <Review></Review>
                        <Review></Review>
                        <Review></Review>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestInfo

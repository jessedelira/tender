import React from 'react'
import {Button} from 'react-bootstrap';
import Review from '../../Profile/components/Review';


const RestInfo = (props) => {
    return (
        <div>
             
            <div className="row">
                <div className="col-lg-12">
                <h2>Location</h2>
                <p>{props.address}</p>
                </div>
                <div className="col-lg-12">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>Latest Reviews</h1>
                    <div>
                        <Review review={props.review} ratingValue={props.ratingValue}></Review>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestInfo

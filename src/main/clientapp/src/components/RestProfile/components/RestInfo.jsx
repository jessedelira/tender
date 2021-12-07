import React from 'react'
import {Button} from 'react-bootstrap';
import Review from '../../Profile/components/Review';


const RestInfo = (props) => {
    return (
        <div>
             
            <div className="row">
                <div className="col-lg-12">
                <h1>{props.address}</h1>
                </div>
                <div className="col-lg-12">
                    <h1>{props.name}</h1>
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

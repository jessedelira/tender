import React from 'react'

const Review = (props) => {
    return (
        <div className="review-container">
            <div className="review">
                        <div className="square-container">
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                        </div>
                        
                            <h1>Review</h1>
                            <h2>Score:{props.ratingValue}</h2>
                      
                            <div className="paragraphs">
                                <p>{props.review}</p>
                            </div>
                            <div>
                                User
                            </div>
                    </div>
        </div>
    )
}

export default Review

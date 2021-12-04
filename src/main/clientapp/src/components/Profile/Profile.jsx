import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
function Profile() {
    return (
        <div className="container">
            <div className="topProfile">
                <div className="name">
                    <img id="pfp" src="beach.png" alt="" />
                </div>
                <div>
                    <h1>Dan Filler</h1>
                </div>
                <h5>Reviews</h5>
            </div>
            <div className="review-container">
               
                    <div className="review">
                        <div className="square-container">
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                        </div>
                        
                            <h1>Halls Drive Inn</h1>
                            <h2>Last Visit for A long time</h2>
                      
                            <div className="paragraphs">
                                <p>
                                    After our hostess rolled her eyes at us for not wanting to sit where she placed us in a nearly empty dining room, things went down hill. I ordered the chili cheese fries. The fries were soggy and the chilly was cold. The cheese only melted because the bowl sat under the warming light for 5 min. I could the bowl from my table. My friend ordered the maple brussel sprouts with the sauce on the side. Good thing because the sauce was made with cheap syrup and not much chili oil/flakes so it was a mechanical sweet flavor. I had to demand a refill on my iced tea and it was my turn to receive the eye roll. I have been a pretty faithful twice a week patron but that has ended. No gift card or apology will fix bad service and bad food.

                                </p>
                            </div>
                            <div>
                                User
                            </div>
                    </div>
               
                    <div className="review">
                        <div>
                            <div className="square"></div>
                        </div>
                        <h1>Hainan House</h1>
                        <h2>Pitiful</h2>
                        <div className="paragraphs">
                            <p>
                                How hard is it for an established Chinese restaurant to prepare 1 order of vegetable fried rice as a take out, apparently pretty difficult. Placed order told 20 minutes after waiting in the restaurant another 25 minutes finally received my order. No apology no comp nothing. These folks seem very disorganized. Got home and rice was cold , few vegetables . Really pitiful experience, I normally don't write bad reviews but could not let this pass

                            </p>
                        </div>
                        <div>
                            User
                        </div>
                    </div>
                    <div className="review">
                        <div>
                            <div className="square"></div>
                        </div>
                        <h1>Resturant</h1>
                        <h2>Title</h2>
                        <div>
                            review content
                        </div>
                        <div>
                            User
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Profile;
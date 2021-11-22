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
                <div className="row">
                    <div className="review">
                        <div className="square-container">
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                        </div>
                        <div>
                        <h1>Resturant</h1>
                        <h2>Title</h2>
                        </div>
                        <div id="review">
                            review content
                        </div>
                        <div>
                            User
                        </div>
                    </div>
                </div>
                <div className="row">
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
                <div className="row">
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
        </div>
    )
}

export default Profile;

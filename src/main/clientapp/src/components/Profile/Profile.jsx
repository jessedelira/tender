import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import Review from './components/Review';
function Profile() {
    return (
        <div className="container">
            <div className="row" id="row-header">
                <div className="col" id="header">
                    <div className="topProfile">
                        <div className="name">
                            <img id="pfp" src="beach.png" alt="" />
                        </div>
                        <div>
                            <h1>Dan Filler</h1>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                   Reviews:
                </div>
                <div className="col-md">
                    <Review></Review>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import Review from './components/Review';
function Profile() {
    
    const getReviews = () =>{
        
    }
    
    
    
    return (
        <div className="container">
            <div className="row" id="row-header">
                <div className="col" id="header">
                    <div className="topProfile">
                        <div className="name">
                            <img id="pfp" src="user_icon.png" alt="" />
                        </div>
                        <div>
                            <h1>Bob Heart</h1>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <button onClick={getReviews}>Get Reviews</button>
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
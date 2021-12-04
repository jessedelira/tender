import React from 'react';
import ChickenCarousel from '../ChickenCarousel/ChickenCarousel.jsx';
import './Info.css'

export default function Info() {
    return(
        <div>
            <div id="welcome_title"><b>Welcome to Tender:</b> A Resturaunt Rater</div>
            <div id="welcome_body">
                <p>This app can be used to access and share information about
                some of the resturaunts in the Fort Wayne area. This can be done by browsing the
                various resturaunts in Tender's database, and by making an account and signing in
                to leave a review of your own.</p>
                
                <p>To get started, go over to <i>Profile</i> to Login, or create
                an account if you don't already have one.
                <br /> From there you can take a look at the <i>Top Ten</i> most highly rated resturaunts
                accoring to Tender users, as well as the <i>Leaderboard</i> if you want to see a breakdown
                of all resturaunts in the Tender database.
                <br />If you're looking for a specific resturaunt, why not try out the <i>Search</i> functionality?
                </p>

                <p>We've left some tenders below to hopefully tide you over until you're able to find just
                    the resturaunt you're looking for.
                    <br />Happy eatings. 🐔
                </p>
            </div>
            
            <ChickenCarousel/ >
        </div>
    )
}
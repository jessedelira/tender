import React from 'react';
import getTopThreeRestaurants from '../../services/getTopThreeRestaurants';

import './topTen.css'

const TopTen = () => {
    
    const myResturaunts = [
        {key: 1, name: "Umi", path:"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/3798461/930869_270207.png"},
        {key: 2, name: "Don Hall's", path:"https://images.squarespace-cdn.com/content/v1/5cae3e049b7d1512e8fa0f49/1604605881306-3LCNBZPG10B93KL92C30/don%2Bhalls%2Blogo1-2.png?format=1500w"},
        {key: 3, name: "Firehouse Subs", path:"https://upload.wikimedia.org/wikipedia/commons/6/68/Firehouse_Subs_logo.png"}
      ];

           
    

    //This needs to be an array of some sort of json elements
    //Need to be key indexed
    //Likely do a query of the DB getting the top 10 resturaunts based on user scores.
    

    //Returns HTML for each resuraunt
    const renderTopTen = (resturaunt, index) => {
        return(
            <section key={resturaunt.key}  className="1" variant="dark">
                    <h2>{index+1}: {resturaunt.name}</h2>
                    <br />
                    <img alt="Nothing yet" src={resturaunt.path} width="30%" height="30%"/>
            </section>
        )
    }

    //Returns entire Top Ten Bracket
    return (
        <div className="App">
            <h1>Top Three</h1>
            <div id="topTenBracket">
                {myResturaunts.map(renderTopTen)}
            </div>
        </div>
    )
}

export default TopTen;
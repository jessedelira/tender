import React from 'react';
import { Alert } from 'react-bootstrap';
import './topTen.css'

const TopTen = () => {

    //This needs to be an array of some sort of json elements
    //Need to be key indexed
    //Likely do a query of the DB getting the top 10 resturaunts based on user scores.
    const myResturaunts = [
        {key: 1, name: "Umi", score: 4.2},
        {key: 2, name: "Don Hall's", score: 4.1},
        {key: 3, name: "Firehouse Subs", score: 4}
      ];

    //Returns HTML for each resuraunt
    const renderTopTen = (resturaunt, index) => {
        return(
            <section key={resturaunt.key} class="1" variant="dark">
                    <h2>{index+1}: {resturaunt.name}</h2>
                    <h4>Score: {resturaunt.score}</h4>
                    <br />
                    <img alt="No Current Image" src="" width="30%" height="30%"/>
            </section>
        )
    }

    //Returns entire Top Ten Bracket
    return (
        <div className="App">
            <h1>Top Ten</h1>
            <div id="topTenBracket">
                {myResturaunts.map(renderTopTen)}
            </div>
            <a href="/LeaderBoard" id="link-dark">Leader Board</a>
        </div>
    )
}

export default TopTen;
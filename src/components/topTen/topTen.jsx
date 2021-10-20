import React from 'react';
import { Alert } from 'react-bootstrap';
import './topTen.css'

const TopTen = () => {
    return (
        
        <div className="App">
            <h1>Top Ten</h1>
            <section class="1" variant="dark">
                <h2>1: Cluckin' Bell</h2>
                <img alt="" src="https://cdn.dribbble.com/users/4954444/screenshots/14131223/media/a37c282acc2530aac7a58801b8a48dc8.png" width="30%" height="30%"/>
            </section>

            <section id="2">
                <h2>2: KFC </h2>
                <img alt="" src="https://i0.wp.com/udou.ph/wp-content/uploads/2019/09/kfc-rev.jpg?resize=768%2C401&ssl=1" width="30%" height="30%"/>
            </section>

            <section id="3">
                <h2>3: Krust Krab</h2>
                <img alt="" src="https://media.dayoftheshirt.com/images/shirts/Th4ks/redbubble_krusty-krab-pizza-redbubble_1608645942.large.png" width="30%" height="30%"/>
            </section>

            <section id="4">
                <h2>4: Pizza Planet</h2>
                <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKRQTmvzfsKf9gdCrIJ0cp5iuFCRxiA6n-Q&usqp=CAU" width="30%" height="30%"/>
            </section>

            <section id="5">
                <h2>5: Whataburger </h2>
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Whataburger_logo.svg/1200px-Whataburger_logo.svg.png" width="30%" height="30%"/>
            </section>
            
            <a href="/LeaderBoard" id="link-dark">Leader Board</a>
            
        </div>
    )
}

export default TopTen;
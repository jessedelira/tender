import React from 'react';
import Carousel from 'react-elastic-carousel';

export default function ChickenCarousel() {
    return(
        <div>
            <Carousel>
                <img alt="" src="tender1.png" width="50%" height="50%"/>
                <img alt="" src="tender2.jpg" width="50%" height="50%"/>
                <img alt="" src="tender3.jpg" width="50%" height="50%"/>
            </Carousel>
        </div>
    )
}

// Uses react-elastic-carousel for the bulk of Carousel properties
//Source: https://www.npmjs.com/package/react-elastic-carousel
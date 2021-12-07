import React from 'react';
import './HomePage.css';
import { Card,CardGroup } from 'react-bootstrap';
const HomePage = () => {
    return (
        <div className="container">
            <div className="row" id="headerRow">

                <div className="col" id='headerPic'>
                    <div id='headerTitle'>
                        <h1 id='Title'>Tender</h1>
                    </div>
                </div>
            </div>
            <div className="row" id='col1'>
                <div className="col">
                    <h3>Popular</h3>
                    <CardGroup>
                        <Card className='Card'>

                            <a href="">
                                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.R-8QsD1mBZtp5Mewb2tV6gHaEK?pid=ImgDet&rs=1" id='cardImg' />
                                <Card.Body>
                                    <Card.Title>Taqueria La Piñata</Card.Title>
                                    <Card.Text>
                                    As a restaurant that offers homemade Mexican cuisine, we are proud to serve the best Mexican food possible. Come visit Taqueria La Piñata today!
                                    </Card.Text>
                                </Card.Body>
                            </a>


                        </Card>
                        <Card className='Card'>
                            <a href="">
                                <Card.Img variant="top" src="https://www.corelifeeatery.com/wp-content/uploads/corelife-eatery-web-logo-black.png" id='cardImg' />
                                <Card.Body>
                                    <Card.Title>CoreLife Eatery</Card.Title>
                                    <Card.Text>
                                    A place the creates clean, healthy, and great tasting food. All hearty bowls are complete with greens, grains, and broths.
                                    </Card.Text>
                                </Card.Body>
                            </a>


                        </Card>

                        <Card className='Card'>
                            <a href="">
                                <Card.Img variant="top" src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=600,format=auto,quality=50/https://cdn.doordash.com/media/photos/5e7d2d0f-6fe3-41fc-9e6d-4510656d5b60-retina-large.jpg" id='cardImg' />
                                <Card.Body>
                                    <Card.Title>Casa Ristorante Italiano</Card.Title>
                                    <Card.Text>
                                    Casa Ristoranti Italiano are family owned and operated Italian restaurants serving authentic Italian pastas, pizzas, salads, soups, sandwiches, lunch specials and an array of Italian specialties.
                                    </Card.Text>
                                </Card.Body>
                            </a>


                        </Card>
                    </CardGroup>
                </div>
            </div>
            <div className="row">
                <div className="col" id='col1'>
                    <h3>American Restaurants</h3>
                    <CardGroup>
                        <Card className='Card'>

                            <a href="">
                                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/c/cf/Mission_BBQ_%28logo%29.svg" id='cardImg' />
                                <Card.Body>
                                    <Card.Title>Mission BBQ</Card.Title>
                                    <Card.Text>
                                    Casual chain featuring BBQ & American sides, plus memorabilia honoring soldiers & first responders.
                                    </Card.Text>
                                </Card.Body>
                            </a>


                        </Card>
                        <Card className='Card'>
                            <a href="">
                                <Card.Img variant="top" src="https://cdn.localdatacdn.com/in/fort-wayne/3442316/original/z01zz03dGk.jpg" id='cardImg' />
                                <Card.Body>
                                    <Card.Title>Don Hall's Hollywood Drive-In</Card.Title>
                                    <Card.Text>
                                    The fabulous 50s live on forever at hall’s hollywood drive-in!
                                    </Card.Text>
                                </Card.Body>
                            </a>


                        </Card>

                        <Card className='Card'>
                            <a href="">
                                <Card.Img variant="top" src="https://www.skylinechili.com/wp-content/uploads/2019/02/3Way_HotSauce_mobile.jpg" id='cardImg' />
                                <Card.Body>
                                    <Card.Title>Skyline Chili</Card.Title>
                                    <Card.Text>
                                    Famous for secret recipe Cincinnati-style chili & fast, friendly dine-in & drive-thru service
                                    </Card.Text>
                                </Card.Body>
                            </a>


                        </Card>
                    </CardGroup>
                </div>
            </div>

        </div>


    )
}

export default HomePage

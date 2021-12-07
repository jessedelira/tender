import React, { useState } from 'react'
import RestInfo from './components/RestInfo';
import './RestProfile.css';
import getOneRestaurant from '../../services/getOneRestaurant';
import getRating from '../../services/getRating';

const RestProfile = () => {
    const [name,setName] = useState("");
    const [imagePath,setImagePath] = useState("");
    const [description,setDescription] = useState("");
    const [address, setAddress] = useState("")
    
    const [ratingValue,setRatingValue] = useState("");
    const [review,setReview] = useState("");

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

    const get = () => {
        let num = getRandomInt(1,11);
        getOneRestaurant(num)
        .then(
            function (response) {
                response.json().then(function (data) {
                    console.log(response);
                    setName(data.name);
                    setImagePath(data.imagePath);
                    setDescription(data.description);
                    setAddress(data.address);
                    
                });
            });

            getRating()
            .then(
                function(response){
                    response.json().then(function (data){
                        let num = getRandomInt(1,5);
                        setRatingValue(data[num].ratingValue);
                        setReview(data[num].review);
                        console.log(response);
                    });
                
            });

        

    }
    
    return (
        <div className="container">
            <div className="row" id="row-header">

                <div className="col" id='col-header'>
                    <img src={imagePath} id="header-img"alt="" /> 
                </div>
                <button onClick={get}>Get Random</button>
                <RestInfo name={name} address={address} description={description} ratingValue={ratingValue} review={review}></RestInfo>

            </div>
        </div>
    )
}

export default RestProfile

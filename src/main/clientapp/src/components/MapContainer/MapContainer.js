var axios = require('axios');

// Fort Wayne lat & long
var lat = '41.1306'
var lon = '-85.12886'

var location = lat+'%2C'+lon
var radius = '1500'
var type = 'restaurant'
var keyword = 'food'
var key = 'AIzaSyBes962d9aX3zEnafAdIfQsZ43TOZQNClo'

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location
  +'&radius='+radius
//   type != keyword, as this can mess with the API call
  +'&type='+type
  +'&keyword='+keyword
  +'&key='+key,
  headers: { }
};

useGoogleAPI(config, key);

function useGoogleAPI(config, key){


  axios(config)
  .then(function (response) {
    var responce_count = response.data.results.length;

    for(var i = 0; i < responce_count; i++){
      var name = response.data.results[i].name;
      var place_id = response.data.results[i].place_id;
      // var geo_lat = response.data.results[i].geometry.location.lat;
      // var geo_lng = response.data.results[i].geometry.location.lng;
      
      var vicinity = response.data.results[i].vicinity;

      var image_path;
      if(typeof response.data.results[i].photos !== 'undefined'){
        image_path = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photo_reference="+response.data.results[i].photos[0].photo_reference+"&key="+key;
      }else{
        image_path = "N/A"
      }
      
      console.log(name+"\n"
      +place_id+"\n"
      // +"Latitude: "+geo_lat+"\n"
      // +"Longitude: "+geo_lng+"\n"
      +"Vicinity: "+vicinity+"\n"
      +"Image Path: "+image_path+"\n"
      +"-----")
    }

    /* If response.data.next_page_token is a valid next page token,
       will recursively call useGoogleAPI() with the token. */
    if (response.data.next_page_token){
      
      var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key='+key+'&pagetoken='+response.data.next_page_token,
        headers: { }
      };

      setTimeout(() => {
        useGoogleAPI(config, key);
      }, 2000);
    }

    // console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}
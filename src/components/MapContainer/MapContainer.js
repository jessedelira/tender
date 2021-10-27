var axios = require('axios');

var location = '-33.8670522%2C151.1957362'
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

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
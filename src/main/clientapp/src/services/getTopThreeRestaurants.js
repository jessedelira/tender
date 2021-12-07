const getTopThreeRestaurants = (username, password) => {

    // http://127.0.0.1:8080/api/v1/account/login?username=jessedelira10&password=Food32
    // When writing a http GET request don't have the await keyword
    // fetch("http://127.0.0.1:8080/api/v1/account/login?username=" + username + "&password=" + password, {
    //     method: "GET"
    // }).then(response => response.json())
    // .then(response =>{
    //     console.log(response.status)
    // })
    return fetch("http://127.0.0.1:8080/api/v1/restaurant/top")
        
    

}
export default getTopThreeRestaurants;
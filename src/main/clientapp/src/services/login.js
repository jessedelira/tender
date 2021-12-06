const login = async (username, password) => {


    // When writing a http GET request don't have the await keyword
    fetch("http://127.0.0.1:8080/api/v1/account/login?username=" + username + "&password=" + password, {
        method: "GET"
    }).then(response => response.json())
    
    

}
export default login;

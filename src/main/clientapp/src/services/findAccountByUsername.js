const findAccountByUsername = (username) => {


    return fetch("http://127.0.0.1:8080/api/v1/account/getByUsername?username=" + username)
        
    

}
export default findAccountByUsername;
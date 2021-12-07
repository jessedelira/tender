const getRating = (id) => {


    return fetch("http://127.0.0.1:8080/api/v1/rating?id=" +id)
        
    

}
export default getRating;
const getOneRestaurant = (id) => {


    return fetch("http://127.0.0.1:8080/api/v1/restaurant?id=" + id)
        
    

}
export default getOneRestaurant;
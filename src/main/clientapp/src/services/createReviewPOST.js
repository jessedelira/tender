

const createAccountPOST = async (value, review) => {



    const rating = {
        "ratingId": 12,
        "restaurantId": 7,
        "ratingValue": value,
        "review": review
    };
    
    await fetch("http://127.0.0.1:8080/api/v1/account", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rating)
    })
        .then(response => response.json()
            .then(
                response => console.log(response)
            )
        );
}

export default createAccountPOST;
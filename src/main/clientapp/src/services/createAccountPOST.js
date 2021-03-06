const createReviewPOST = async (username,password,name) => {

    const account = {
        "username": username,
        "password": password,
        "name":name
    };
    
    await fetch("http://127.0.0.1:8080/api/v1/account", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(account)
    })
        .then(response => response.json()
            .then(
                response => console.log(response)
            )
        );
}

export default createReviewPOST;
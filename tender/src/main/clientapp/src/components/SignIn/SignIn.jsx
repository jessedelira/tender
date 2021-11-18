import React, { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css'

function SignIn() {

  //Handles variables for form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Sends post request to server for login
  const handleSignIn = (e) => {
    e.preventDefault();
    Axios.post("https://localhost3000/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    })
  };

return(

<div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-2 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5 text-center">
          <h1 className="card-title"> Login</h1>
            <form className="form" onSubmit={ handleSignIn }>

            <div className="form-inputs">
                <input
                id="username" 
                type="text" 
                name="username" 
                placeholder="Username"
                className="form-input"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                />
            </div>
            <div className="form-inputs">
                <input 
                id="password"
                type="password" 
                name="password" 
                placeholder="Password"
                className="form-input"
                onChange={(e) => {
                  setPassword(e.target.value);
                }} 
                 />
            </div>
                 <button className="btn btn-danger"  id="" type="submit"> Sign In</button>
            </form>
            <a href="/SignUp">Don't have an account yet?</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
    )

}

export default SignIn;
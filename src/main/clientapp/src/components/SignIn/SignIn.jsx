import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css'

const SignIn = () => {

   


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-2 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5 text-center">
                <h1 className="card-title"> Login</h1>


                <div className="form-inputs">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="form-input"
                  />
                </div>
                <div className="form-inputs">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-input"
                  />
                </div>
                <button className="btn btn-danger" id="" onClick={loginUser}> Sign In</button>

                <a href="/SignUp">Don't have an account yet?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )




}


export default SignIn;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const SignIn = () =>{

    return(
        <div className="form-content">
          <form className="form">
            <h1>
                Get Started with us today!
            </h1>
            <div className="form-inputs">
                <label htmlFor="username"  className="form-label">Username</label>
                <input
                id="username" 
                type="text" 
                name="username" 
                placeholder="Enter your username"
                className="form-input" 
                />
            </div>
            <div className="form-inputs">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                id="email"
                type="email" 
                name="email" 
                placeholder="Enter your Email"
                className="form-input" 
                />
            </div>
            <div className="form-inputs">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                id="password"
                type="password" 
                name="password" 
                placeholder="Enter your Password"
                className="form-input" 
                />
            </div>
            <button className="form-input-btn" type="submit"> Sign Up</button>

         </form>
        </div>
    )




}


export default SignIn;
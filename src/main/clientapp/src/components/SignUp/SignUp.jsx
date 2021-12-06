import React from 'react'

const SignUp = () => {
    return (
        <div  className="container">
    <div  className="row">
      <div  className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div  className="card border-0 shadow rounded-3 my-5">
          <div  className="card-body p-4 p-sm-5 text-center">
          <h1 className="card-title"> Get started with us today!</h1>
            <form className="form">

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
                 <button className="btn btn-danger"  id=""type="submit"> Sign Up</button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default SignUp

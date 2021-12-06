import Header from '../src/components/Header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout.jsx';
import SignIn from '../src/components/SignIn/SignIn.jsx';
import SignUp from '../src/components/SignUp/SignUp.jsx';
import topTen from './components/topTen/topTen.jsx';
import LeaderBoard from '../src/components/LeaderBoard/LeaderBoard.jsx';
import Profile from './components/Profile/Profile.jsx';
import RestProfile from './components/RestProfile/RestProfile.jsx';
import { React, useState } from 'react';
import login from './services/login.js';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = () => {
    login(document.getElementById("username").value, document.getElementById("password").value)
    .then(
      function (response) {
          if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' + response.status);
              return;
          }
          else{
            setLoggedIn(true);
          }
      });
    
    // add logic to change the state of a logged in user
  }


  if (loggedIn === false) {
    return (<div className="App">
      <div  className="container">
        <div  className="row">
          <div  className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div  className="card border-2 shadow rounded-3 my-5">
              <div  className="card-body p-4 p-sm-5 text-center">
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
    </div>);
  }
  else {
    return (
      <div className="App">
        <Header></Header>
        <Layout>

          <Route exact path='/' component={SignIn} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/SignIn' component={SignIn} />
          <Route path='/topTen' component={topTen} />
          <Route path='/leaderBoard' component={LeaderBoard} />
          <Route path='/profile' component={Profile} />
          <Route path='/RestProfile' component={RestProfile} />
        </Layout>
      </div>
    );
  }

}

export default App;

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout.jsx';
import SignIn from '../src/components/SignIn/SignIn.jsx';
import SignUp from '../src/components/SignUp/SignUp.jsx';
import topTen from './components/topTen/topTen.jsx';
import LeaderBoard from '../src/components/LeaderBoard/LeaderBoard.jsx';
import Profile from './components/Profile/Profile.jsx';
import RestProfile from './components/RestProfile/RestProfile.jsx';
import { React, useState, useEffect } from 'react';
import login from './services/login.js';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState();
  // 0 is signin mode and 1 is signup mode
  const [mode, setMode] = useState(0);

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("isLoggedIn");
    setLoggedIn(JSON.parse(isLoggedIn));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("isLoggedIn", JSON.stringify(loggedIn));
    console.log(loggedIn);
  })


  const logout = () => {
    setLoggedIn(false);
  }

  const loginUser = () => {
    login(document.getElementById("username").value, document.getElementById("password").value)
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
          else {
            setLoggedIn(true);
          }
        });
  }

  const changeMode = () => {
    setMode(1);
  }

  if (loggedIn === false) {
    if (mode === 0) {
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

                    <button className="btn btn-danger" onClick={changeMode}>Don't have an account yet?</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>);
    }
    if(mode === 1) {
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5 text-center">
                  <h1 className="card-title"> Get started with us today!</h1>
                  <form className="form">

                    <div className="form-inputs">
                      <label htmlFor="username" className="form-label">Username</label>
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
                    <button className="btn btn-danger" id="" type="submit"> Sign Up</button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  } 
  else {
    return (
      <div className="App">
        <div className="App">
          <Navbar bg="dark" variant="dark" sticky="dark">
            <Navbar.Brand>
              <img src="chicken.png" width="40px" height="40px" id="chicken-logo" alt="chicken logo" />
              <label htmlFor="chicken">Tender</label>
            </Navbar.Brand>

            <Nav>
              <Nav.Link href="/topTen">Top Three</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="/leaderBoard">Leader Board</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <button className="btn btn-danger" onClick={logout}>Logout</button>
            </Nav>
          </Navbar>
        </div>
        <Layout>

          <Route exact path='/' component={SignIn} />
          <Route path='/SignUp' component={SignUp} />
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

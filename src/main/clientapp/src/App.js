import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout.jsx';
import topTen from './components/topTen/topTen.jsx';
import LeaderBoard from '../src/components/LeaderBoard/LeaderBoard.jsx';
import Profile from './components/Profile/Profile.jsx';
import RestProfile from './components/RestProfile/RestProfile.jsx';
import { React, useState, useEffect } from 'react';
import login from './services/login.js';
import createAccountPOST from './services/createAccountPOST.js';
import findAccountByUsername from './services/findAccountByUsername.js';
import CreateReview from './components/CreateReview/CreateReview.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState();
  const [name, setName] = useState();




  // 0 is signin mode and 1 is signup mode
  const [mode, setMode] = useState(0);

  useEffect(() => {

    const isLoggedIn = window.localStorage.getItem("isLoggedIn");
    const username = window.localStorage.getItem("username");
    const id = window.localStorage.getItem("UserId");
    const name = window.localStorage.getItem("Name");
    setLoggedIn(JSON.parse(isLoggedIn));
    setUsername(JSON.parse(username));
    // setUserId(JSON.parse(id));
    // setName(JSON.parse(name));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("isLoggedIn", JSON.stringify(loggedIn));
    window.localStorage.setItem("username", JSON.stringify(username));
    // window.localStorage.setItem("UserId",JSON.stringify(userId));
    // window.localStorage.setItem("Name",JSON.stringify(name));
    console.log(loggedIn);
    console.log(username);
  })


  const logout = () => {
    setLoggedIn(false);
  }


  const createAccount = () => {
    const username = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    createAccountPOST(username, name, password);
  }

  const loginUser = () => {
    
    findAccountByUsername(document.getElementById("username").value)
      .then(
        function (response) {
        response.json().then(function (data) {
          setUserId(data.id);
          setName(data.name);
        });
      });
    

    setUsername(document.getElementById("username").value);

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
      };
    

    const changeMode = () => {
    setMode(1);
    }

    const change = () => {
    setMode(0);
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
  if (mode === 1) {
    return (<div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5 text-center">
                <h1 className="card-title"> Get started with us today!</h1>


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
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    id="name"
                    type="text"

                    placeholder="Enter your Name"
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
                <button className="btn btn-danger" id="" onClick={createAccount}> Sign Up</button>
                <button className="btn btn-danger" onClick={change}>Go Back!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
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
            <Nav.Link href="/topThree">Top Three</Nav.Link>
            <Nav.Link href="/RestProfile">Random</Nav.Link>
            <Nav.Link href="/leaderBoard">Leader Board</Nav.Link>
            <Nav.Link href="/create">Create Review</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
          </Nav>
        </Navbar>
      </div>
      <Layout>
        <Route path='/Home' component={HomePage}/>
        <Route path='/topThree' component={topTen} />
        <Route path='/leaderBoard' component={LeaderBoard} />
        <Route path='/profile' component={Profile} />
        <Route path='/RestProfile' component={RestProfile} />
        <Route path="/create" component={CreateReview}/>
      </Layout>
    </div>
  );
}}


export default App;

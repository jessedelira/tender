import Header from '../src/components/Header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom';
import MapContainer from '../src/components/MapContainer/MapContainer.jsx';
import Layout from '../src/components/Layout/Layout.jsx';
import Info from './components/Info/Info.jsx';
import SignIn from '../src/components/SignIn/SignIn.jsx';
import SignUp from '../src/components/SignUp/SignUp.jsx';
import topTen from './components/topTen/topTen.jsx';
import LeaderBoard from '../src/components/LeaderBoard/LeaderBoard.jsx';
import Profile from './components/Profile/Profile.jsx';
import RestProfile from './components/RestProfile/RestProfile.jsx';
import {React, useState} from 'react';
import login from './services/login.js';

const App = () => {

  const [loggedIn,setLoggedIn] = useState(false);

  // const get = () => {
    // fetchAllStudents(document.getElementById("email").value)
        // .then(response => {
            // console.log(response);
        // })
        // .then(data => {

        // })


// }

  const loginUser = () => {
    login(document.getElementById("username").value,document.getElementById("password").value)
    .then(response => {
      console.log(response);
    })

    // add logic to change the state of a logged in user
  }

  return (
    <div className="App">
      <Header></Header>
      <Layout>

        <Route exact path='/' component={SignIn}/>
        <Route path ='/SignUp' component={SignUp}/>
        <Route path ='/SignIn' component={SignIn}/>
        <Route path ='/topTen' component={topTen}/>
        <Route path ='/leaderBoard' component={LeaderBoard}/>
        <Route path ='/profile' component={Profile}/>
        <Route path ='/RestProfile' component={RestProfile}/>
      </Layout>
    </div>
  );
}

export default App;

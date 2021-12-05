import Header from '../src/components/Header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom';
import MapContainer from '../src/components/MapContainer/MapContainer.jsx';
import Layout from '../src/components/Layout/Layout.jsx';
import RestProfile from '../src/components/RestProfile/RestProfile.jsx';
import Info from './components/Info/Info.jsx';
import SignIn from '../src/components/SignIn/SignIn.jsx';
import topTen from './components/topTen/topTen.jsx';
import LeaderBoard from '../src/components/LeaderBoard/LeaderBoard.jsx';
import Profile from './components/Profile/Profile.jsx';
const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Layout>
        <Route exact path='/' component={Info}/>
        <Route path ='/SignUp' component={SignIn}/>
        <Route path ='/topTen' component={topTen}/>
        <Route path ='/leaderBoard' component={LeaderBoard}/>
        <Route path ='/profile' component={Profile}/>
        <Route path ='/RestProfile' component={RestProfile}/>
      </Layout>
    </div>
  );
}

export default App;

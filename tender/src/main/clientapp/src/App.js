import Header from '../src/components/Header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom';
import MapContainer from '../src/components/MapContainer/MapContainer.jsx';
import Layout from '../src/components/Layout/Layout.jsx';
import ChickenCarousel from './components/ChickenCarousel/ChickenCarousel.jsx';
import SignIn from '../src/components/SignIn/SignIn.jsx';
import SignUp from '../src/components/SignUp/SignUp.jsx';
import topTen from './components/topTen/topTen.jsx';
import LeaderBoard from './LeaderBoard/LeaderBoard.jsx';
const App = () => {
  return (
    <div className="App">
      <Header></Header>
      
      <Layout>
        <Route exact path='/' component={ChickenCarousel}/>
        <Route path ='/SignIn' component={SignIn}/>
        <Route path ='/SignUp' component={SignUp}/>
        <Route path ='/topTen' component={topTen}/>
        <Route path ='/leaderBoard' component={LeaderBoard}/>
        
      </Layout>
    </div>
  );
}

export default App;

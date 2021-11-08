import Header from '../src/components/Header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom';
import MapContainer from '../src/components/MapContainer/MapContainer.jsx';
import Layout from '../src/components/Layout/Layout.jsx';
import ChickenCarousel from './components/ChickenCarousel/ChickenCarousel.jsx';
import SignIn from '../src/components/SignIn/SignIn.jsx';
const App = () => {
  return (
    <div className="App">
      <Header></Header>
      
      <Layout>
        <Route exact path='/' component={ChickenCarousel}/>
        <Route path ='/SignUp' component={SignIn}/>
      </Layout>
    </div>
  );
}

export default App;

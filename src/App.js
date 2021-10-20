import Header from '../src/components/Header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import MapContainer from '../src/components/MapContainer/MapContainer.jsx';
import {Route} from 'react-rou'

const App = () => {
  return (
    <div className="App">
      
      <Header></Header>
      <Button>Hi</Button>
      <MapContainer></MapContainer>
    </div>
  );
}

export default App;

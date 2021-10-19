import Header from '../src/components/Header/Header.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import MapContainer from '../src/components/MapContainer/MapContainer.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Button>Hi</Button>
      <MapContainer></MapContainer>
    </div>
  );
}

export default App;

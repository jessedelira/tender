import Header from '../src/components/Header/Header.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import MapContainer from '../src/components/MapContainer/MapContainer.jsx';
import ChickenCarousel from './components/ChickenCarousel/ChickenCarousel.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <MapContainer></MapContainer> */}
      <ChickenCarousel></ChickenCarousel>
    </div>
  );
}

export default App;

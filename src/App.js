import Header from '../src/components/Header/Header.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Button>Hi</Button>
    </div>
  );
}

export default App;

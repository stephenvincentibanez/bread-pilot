import './App.css';
import Linkbar from './components/Linkbar'
import Navbar from './components/Navbar'

function App(props) {
  return (
    <div>
      <h1>Bread Pilot</h1>
      {props.routing}
      <Linkbar/>
    </div>
  );
}

export default App;

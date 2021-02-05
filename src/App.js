import './App.css';
import Linkbar from './components/Linkbar'

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

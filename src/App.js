import './App.css';
import Linkbar from './components/Linkbar'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <h1>Bread Pilot</h1>
      {/* bread pilot logo */}
      <Navbar/>
      <Linkbar/>
    </div>
  );
}

export default App;

import './App.css';
import {SiApplemusic} from 'react-icons/si'
import {SiSpotify} from 'react-icons/si'
import {SiYoutube} from 'react-icons/si'
import {SiInstagram} from 'react-icons/si'


function App() {
  return (
    <div>
      <h1>Bread Pilot</h1>
      <div className="navBar">
        <a href="https://breadpilotband.bandcamp.com/">
          <h3>Music</h3>
        </a>
        {/* link to bandcamp */}
        <h3>Booking</h3>
        {/* component with booking email  */}
        <h3>Store</h3>
        {/* link to bandcamp merch */}
        <h3>Live</h3>
        {/* component with listings of shows  */}
      </div>
      <div className="links">
        <SiApplemusic/>
        <SiSpotify/>
        <a href="https://www.youtube.com/user/breadpilotband">
          <SiYoutube/>
        </a>
        <SiInstagram/>
      </div>
    </div>
  );
}

export default App;

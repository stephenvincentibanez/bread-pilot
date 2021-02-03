import React from 'react';
import {SiApplemusic} from 'react-icons/si'
import {SiSpotify} from 'react-icons/si'
import {SiYoutube} from 'react-icons/si'
import {SiInstagram} from 'react-icons/si'
import {FaBandcamp} from 'react-icons/fa'

const Linkbar = () => {
    return (
        <div>
            <a href="https://itunes.apple.com/us/artist/bread-pilot/1029036444">
                <SiApplemusic/>
            </a>
            <a href="https://open.spotify.com/artist/6WX9FRYQIYRRTNPZaPFQ74" id="spotify">
                <SiSpotify/>
            </a>
            {/* <a href="https://www.youtube.com/user/breadpilotband">
                <SiYoutube/>
            </a> */}
            <a href="https://www.instagram.com/bread_pilot/?hl=en">
                <SiInstagram/>         
            </a>
            <a href="https://breadpilotband.bandcamp.com/">
                <FaBandcamp/>
            </a>
        </div>
    );
}

export default Linkbar;

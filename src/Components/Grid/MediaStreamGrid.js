import React from 'react';
import './MediaStreamGrid.css'
import Amazon from '../MediaPlayers/Amazon/Amazon'
import Apple from '../MediaPlayers/Apple/Apple'
import Soundcloud from '../MediaPlayers/Soundcloud/Soundcloud'
import Spotify from '../MediaPlayers/Spotify/Spotify'

const MediaStreamGrid = () => {
    return <div>
        <div class="grid-container">

            {/* <div id="am-descr" class="grid-item"></div> */}
            <div class="grid-item"><Amazon /></div>


            <div class="grid-item"><Apple /></div>
            {/* <div id="apple-descr" class="grid-item"> </div> */}
           


            <div class="grid-item"><Soundcloud /></div>
            {/* <div id="scloud-descr" class="grid-item"></div> */}
    
            {/* <div class="grid-item"></div> */}
            <div class="grid-item"><Spotify /></div>
        </div>
    </div>;
};

export default MediaStreamGrid;

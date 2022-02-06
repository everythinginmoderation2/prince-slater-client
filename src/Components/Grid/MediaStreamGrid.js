import React from 'react';
import './MediaStreamGrid.css'
import Amazon from '../MediaPlayers/Amazon/Amazon'
import Apple from '../MediaPlayers/Apple/Apple'
import Soundcloud from '../MediaPlayers/Soundcloud/Soundcloud'
import Spotify from '../MediaPlayers/Spotify/Spotify'

const MediaStreamGrid = () => {
    return <div>
        <div class="grid-container">

            <div id="am-descr" class="grid-item">
                <h4>Flow state is an experimental blend of hip hop and rap tracks, each
                    recorded within one session.
                    <em>'Friends'</em> is an anthem.&ensp; 
                    <em>'Dusty'</em> is a G-rated Eminem type diss-track aimed at any vet lyricists
                    eager to judge.&ensp;
                    <em>'Missed Call'</em> was a nonchalant attempt at some nostalgic vibe.
                    My favorite is <em>'DNA'</em>. It was fun to make and is still fun to listen to.
                </h4></div>
            <div class="grid-item"><Amazon /></div>


            <div class="grid-item"><Apple /></div>
            <div id="apple-descr" class="grid-item">
                <h1>As the title suggests,
                    Flow State II was another casual genre audition.
                    It's relaxing, picking through samples for easy arrangements.
                </h1>
            </div>


            <div class="grid-item"><Soundcloud /></div>
            <div id="scloud-descr" class="grid-item">
                <p>
                    This song is a huge sigh in high notes. As the 3-month
                    lock-down was nearing its end, all I wanted was to perform new music
                    based on new experiences and inspirations that I didn't have yet. 
                    So, I did what everyone did. I returned to my recent comfort zone for that afternoon,
                    recording in the same, sweet falsetto spot as I did in <em>Settle Down</em>.
                </p>
            </div>


            <div class="grid-item">
            <p>
            Finally, all pieces of my humble practice 
            thus far have come from a genuine place. Stories were told and growing pains were tended to.
            <br/> 
            <br/>
            Unlike the improvisational 
            or impromptu recordings, tracks like 'M.A.F.M.W.A.F.V' and 'Settle Down' offer some early adolescent
            insight on relationships, judgment and self-awareness. 
            <br/>
            <br/>
            So, there ya have it. The door is open. Listen, digest and 
            ask me anything.
            </p>
            </div>
            <div class="grid-item"><Spotify /></div>
        </div>
    </div>;
};

export default MediaStreamGrid;

import React from 'react';
import './ServicesTable.css'
import './MLServicesTable.css'
import './XLServicesTable.css'
import guitarist from '../../Images/girl_playing_guitar_at_station.png'
import singerSongwriter from '../../Images/singer.png'
import performer from '../../Images/headliner.png'


const ServicesTable = () => {
    return <div>
        <h1 className="headline">Train with PS</h1>
        <table>
            <tr className="row">
                <div className="image-and-caption-container">
                    <th scope="row"><h2 className="row-title">Guitar Training</h2>
                        <img src={guitarist} alt="guitarist" />
                    </th>
                    <button className="booking-list-button">
                    <a href="https://calendly.com/ps--39/learn-a-song"
                        target="_blank"
                        rel="noreferrer">Schedule Now</a>
                </button> 
                </div>
                <td><p>8 sessions will guarantee that you obtain the knowledge, skill-level and
                    confidence to learn independently and at your own pace after we are finished.
                    You will play and perfect a song of your choice prior to completion. This will likely happen
                    sooner than 8 sessions, but it is recommended to practice with me for as long as desired
                    for the best results.</p></td>
               
            </tr>
            <tr className="row">
                <div className="image-and-caption-container">
                    <th scope="row"><h2 className="row-title">Singer Songwriter</h2>
                        <img src={singerSongwriter} alt="guitarist performing under blue stage light in front of darkened audience" />
                    </th>
                    <button className="booking-list-button">
                    <a href="https://calendly.com/ps--39/singer-songwriter-training-sessions"
                        target="_blank"
                        rel="noreferrer">Schedule Now</a></button>
                </div>
                <td><p>Sometimes, writing and composing don't come easily. Our meetings will help clear
                    biases that we form and carry along the way that may lead to writer's block.
                    We will work using our own techniques and approaches.
                    To help gain perspective in such times of need, we will also study and practice the
                    techniques and approaches of others. The goal is for you to walk away with
                    inspiration and an understanding more valuable than a price could ever suggest.</p></td>
               
            </tr>
            <tr className="row">
                <div className="image-and-caption-container">
                    <th scope="row"><h2 className="row-title">Performance</h2>
                        <img src={performer} alt="guitarist playing and singing into mic" />
                    </th>
                    <button className="booking-list-button">
                    <a href="https://calendly.com/ps--39/performance-specifics-training-sessions"
                        target="_blank"
                        rel="noreferrer">Schedule Now</a>
                </button>
                </div>
                <td><p>The ability to play and the ability to perform are divided by a thin line,
                    but can be united to form a great bond between you and your audience.</p></td>
            </tr>
        </table>
    </div>;
};

export default ServicesTable;

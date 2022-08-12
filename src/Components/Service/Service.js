import React from 'react'
import thumbnail from '../../Images/darkened_black_and_white_of_man_sitting_and_playing_on_stage.png'
import './Service.css'

function Service() {
    return (
        <div className="service">
            
                <h1 className="row-title">Guitar Training</h1>
                <div className="image-and-caption-container">
                <img src={thumbnail} alt="darkened performer on stage" />
                <caption className="description">My lessons guarantee that you will obtain the knowledge, skill-level and
                confidence to learn independently and at your own pace.
                This could likely happen sooner than 8 sessions, but it is recommended to
                practice with me for as long as one year for the best results.</caption>
                <caption className="description-right">If you are training to perform, we will choose a genre that you 
                wish to play. Then, we will choose to learn and practice three songs belonging to that genre. Otherwise, if
                you desire to play only your favorites or for fun, we will practice these specific songs.</caption>
            </div>
            <button className="booking-list-button">
                    <a href="https://calendly.com/ps--39/learn-a-song"
                        target="_blank"
                        rel="noreferrer">Schedule Now</a>
                </button>
        </div>
    )
}

export default Service
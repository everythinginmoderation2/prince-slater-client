import React from 'react'
import thumbnail from '../../Images/darkened_black_and_white_of_man_sitting_and_playing_on_stage.png'
import './Lessons.css'

function Lessons() {
    return (
        <div className="lessons">
            
                <h1 className="row-title">Guitar Training</h1>
                <div className="image-and-caption-container">
                <img src={thumbnail} alt="darkened performer on stage" />
                <caption className="description">Time under tension truly does make a difference. My lessons and prescribed practice
                regimens guarantee that you will obtain enough familiarity with music theory and the confidence to 
                learn independently and at your own pace. No rush though. I'm here with you every 
                step of the way.</caption>
                <caption className="description-right">There are countless resources available to learn from online. 
                However, it is much more convenient and fun to learn with someone in person. My lifetime in performing
                arts, in addition to my more recent experience as a 7-year veteran ESL educator has made music education 
                even more enjoyable. Did I mention that I am self-taught?</caption>
            </div>
            <button className="booking-list-button">
                    <a href="https://calendly.com/ps--39/learn-a-song"
                        target="_blank"
                        rel="noreferrer">Schedule Now</a>
                </button>
        </div>
    )
}

export default Lessons
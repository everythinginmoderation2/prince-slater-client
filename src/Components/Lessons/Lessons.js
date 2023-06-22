import React from 'react'
import thumbnail from '../../Images/DSC_9931.jpg'
import '../schedButton.css'
import '../layout.css'
import '../layoutMax1200.css'

function Lessons() {
    return (
        <div className="layout">
            <h1 className="row-title">Guitar Lessons</h1>
            <div id="lessons-img" className="image-and-caption-container">
                <img src={thumbnail} alt="Mr.Slater instructs student on playing a note" />
                <button className="booking-list-button">
                    <a href="https://forms.gle/dfjHnWvY5xTgPdqY9"
                        target="_blank"
                        rel="noreferrer">Booking Inquiries</a>
                </button>
            </div>
            
            <div className='description-container'>
                <div className="description">Time under tension truly does make a difference. My lessons and prescribed practice
                    regimens guarantee that you will obtain enough familiarity with music theory and the confidence to
                    learn independently and at your own pace. No rush though. I'm here with you every
                    step of the way.</div>
                <div className="description-right">There are countless resources available to learn from online.
                    However, it is much more convenient and fun to learn with someone in person. My lifetime in performing
                    arts, in addition to my more recent experience as a 7-year veteran ESL educator has made music education
                    even more enjoyable. Did I mention that I am self-taught?</div>
            </div>
        </div>
    )
}

export default Lessons
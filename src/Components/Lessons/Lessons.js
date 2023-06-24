import React from 'react'
import thumbnail from '../../Images/DSC_9931.jpg'
import '../schedButton.css'
import '../layout.css'
import '../layoutMax1200.css'

function Lessons() {
    return (
        <div className="layout">
            <h1 className="row-title">Music Lessons</h1>
            <div id="lessons-img" className="image-and-caption-container">
                <img src={thumbnail} alt="Mr.Slater instructs a student on how to play a note on an acoustic guitar." />
                <button className="booking-list-button">
                    <a href="https://forms.gle/dfjHnWvY5xTgPdqY9"
                        target="_blank"
                        rel="noreferrer">Booking Inquiries</a>
                </button>
            </div>
            
            <div className='description-container'>
                <p className="description">Time under tension truly does make a difference. Whether we're learning to play guitar
                    or we're learning to sing, my lessons and prescribed practice
                    regimens guarantee that learners will obtain familiarity with key elements of music theory. 
                    <br/>
                    <br/>
                    They will gain the confidence to
                    learn or practice independently and at their own pace. No rush though. I'm here with you every
                    step of the way.
                    <br/>
                    <br/>
                    There are many resources available to learn online.
                    However, some times it is much more convenient to attend live instruction. 
                    </p>
                <p className="description-right">Being able to ask questions 
                    and receive immediate feedback is a major plus. And, it can be entertaining. My own educational journey has taught
                    me this and much more! 
                    <br/>
                    <br/>
                    This lifetime in performing
                    arts combined with my more recent experience as a 7-year veteran ESL educator helps me clearly communicate my 
                    understanding to all skill-levels. 
                    <br/>
                    <br/>
                    Countless hours of ongoing dedication makes me enthusiastic to help
                    my community members use their time efficiently 
                    while embarking on their own musical journey.</p>
            </div>
        </div>
    )
}

export default Lessons
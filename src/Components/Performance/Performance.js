import React from 'react'
import thumbnail from '../../Images/IMG_1857.JPG'
import '../schedButton.css'
import '../layout.css'
import '../layoutMax1200.css'

function Performance() {
    return (
        <div className="layout">
            <h1 className="row-title">Live Shows</h1>
            <div className="image-and-caption-container">
                <img id='performances-img' src={thumbnail} alt="darkened performer on stage" />
                <button className="booking-list-button">
                    <a href="https://forms.gle/XwfG2ZxHZec89amX8"
                        target="_blank"
                        rel="noreferrer">Book Now</a>
                </button>
            </div>

            <div className='description-container'>
                <p className="description">I arrange live performances and perform live, as an ensemble member or solo artist. I accept bookings for live
                    shows and prerecorded shows of all sorts. As a singer, guitarist, or both. Examples include parties, promotional events, family gatherings and even 
                    events for children.
                </p>
                <p className="description-right">Upon reasonable request, set-list lengths, song genres and set-list arrangements
                    may be co-organized, in advance, with the event host(s) to determine what is most suitable for
                    their patrons (or audience members). Otherwise, song suggestions or requests are also accepted in advance.
                </p>
            </div>
        </div>
    )
}

export default Performance
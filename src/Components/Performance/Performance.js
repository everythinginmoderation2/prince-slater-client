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
                <p className="description">I arrange live performances, 
                    and I perform live as an ensemble member or solo artist.
                    <br />
                    <br />
                    I accept bookings for live shows and prerecorded shows of 
                    all sorts. As a singer, guitarist, rapper or emcee.
                    <br />
                    <br />
                    These include parties, promotional events, family gatherings and even
                    events for children.
                    <br />
                    <br />
                    To submit questions about specifics, hit the "contact now" button!
                </p>
                <p className="description-right">Performance details, such
                    as set-list lengths, song genres and set-list arrangements,
                    for example, may be co-organized.
                    <br />
                    <br />
                    Event hosts may help determine what is most suitable for
                    their patrons (or audience members).
                    <br />
                    <br />
                    Otherwise, details will be prepared by the performer, 
                    and sent for approval upon request.
                </p>
            </div>
        </div>
    )
}

export default Performance
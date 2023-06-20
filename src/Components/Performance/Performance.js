import React from 'react'
import thumbnail from '../../Images/darkened_black_and_white_of_man_sitting_and_playing_on_stage.png'
import './Performance.css'

function Performance() {
    return (
        <div className="performance">
            
                <h1 className="row-title">Performances</h1>
                <div className="image-and-caption-container">
                <img src={thumbnail} alt="darkened performer on stage" />
                <caption className="description">As an ensemble member or solo artist, I am available to perform live. I accept bookings for live 
                shows and prerecorded shows of all sorts. As a solo artist, I sing and play the acoustic guitar. Sets aren't limited to existing
                setlists- songs that have already been prepared.
                </caption>
                <caption className="description-right">Upon request, setlist lengths, genres and arrangements
                may be co-organized, in advance, with the event host(s) to determine what is most suitable for 
                their patrons (or audiences). Otherwise, advance song suggestions or requests are also accepted.</caption>
            </div>
            <button className="booking-list-button">
                    <a href="https://calendly.com/ps--39/learn-a-song"
                        target="_blank"
                        rel="noreferrer">Schedule Now</a>
                </button>
        </div>
    )
}

export default Performance
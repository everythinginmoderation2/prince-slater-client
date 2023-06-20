import React from 'react'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className="aboutMe">
            
                <h1 className="row-title-about">About Me</h1>
                <div className="p-container">
                <p className="about">A writer, singer, instrumentalist and performer who enjoys writing and arranging 
                music for himself, as well as, for others. Or more simply put, a performing arts enthusiast.</p>

                <p className="about">Since my  early practice sessions as a solo performer
                began in 2016, much of my humble beginnings took off in some of Vietnam's hot-spots, popular cafes, restaurants,
                studios and venues. I started off at open mic nights, then continued at exclusive 
                gatherings and even organized events like talent showcases and festivals. Send a msg for inquiries.</p>
                <address className='about-contact'>
                <a href="mailto:ps@princeslater.com">ps@princeslater.com</a>
                </address>
                <p className="about">My experience in the entertainment industry extends further
                than any guitar or mic cable. A lot of extra-curricular dedication has allowed me to take part in  
                productions on stage and in front of (or behind) cameras. Whether it be as a model, thespian, musician, emcee,
                writer, producer, or director, I have been granted such memorable opportunities to meet and work alongside other people.
                The fun continues! If you read this and consider this a good time to reach out, don't hesitate!</p>
            </div>
        </div>
    )
}

export default AboutMe
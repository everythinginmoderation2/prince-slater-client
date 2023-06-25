import React from 'react'
import './AboutWeb.css'

const AboutWeb = () => {
    return (
        <div className='caption-overlay'>
            <p className='about-web-p'>I built this webpage using JavaScript, React.js, and CSS.</p>
            <button className='more-info'><a href="https://forms.gle/JAB9RbM8QSLVBTFg7"
                target="_blank"
                rel="noreferrer">More Info</a></button>
            <p className='about-web-p'>I can do the same for you.</p>
        </div>
    )
}

export default AboutWeb
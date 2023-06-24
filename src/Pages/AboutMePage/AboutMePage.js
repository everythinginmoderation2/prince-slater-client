import React from 'react'
import './AboutMePage.css'
import '../Scrollbar.css'
import HomeButton from '../../Components/Buttons/HomeButton'
import ContactNow from '../../Components/Buttons/ContactNow.js'
import Navbar from '../../Components/Navbar/Navbar'
import AboutMe from '../../Components/AboutMe/AboutMe'


const AboutMePage = () => {
    return (
        <div className='about-container'>
            <header className='header'>
                <Navbar />
            </header>
            <div className='body-about'>
                <AboutMe />
            </div>
            <footer>
                <HomeButton />
                <ContactNow />
            </footer>
        </div>
    )
}

export default AboutMePage


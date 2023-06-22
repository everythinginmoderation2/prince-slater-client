import React from 'react'
import './AboutMePage.css'
import '../Misc/Scrollbar.css'
import HomeButton from '../../Components/Buttons/HomeButton'
import ContactNow from '../../Components/Buttons/ContactNow.js'
import Navbar from '../../Components/Navbar/Navbar'
import AboutMe from '../../Components/AboutMe/AboutMe'


const AboutMePage = () => {
    return (
        <div className=''>
            <header className='header'>
                <Navbar />
            </header>
            <main className='body-about'>
                <AboutMe />
            </main>
            <footer>
                <HomeButton />
                <ContactNow />
            </footer>
        </div>
    )
}

export default AboutMePage


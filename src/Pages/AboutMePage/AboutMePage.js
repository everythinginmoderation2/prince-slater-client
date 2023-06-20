import React from 'react'
import './AboutMePage.css'
// import '../Misc/Scrollbar.css'
import './Max700.css'
import HomeButton from '../../Components/Buttons/HomeButton'
import BookNow from '../../Components/Buttons/BookNow.js'
import Navbar from '../../Components/Navbar/Navbar'
import AboutMe from '../../Components/AboutMe/AboutMe'


const AboutMePage = () => {
    return (
        <div className=''>
            <header className='header'>
                <Navbar />
            </header>
            <body className='body-about'>
                <AboutMe />
            </body>
            <footer>
                <HomeButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default AboutMePage


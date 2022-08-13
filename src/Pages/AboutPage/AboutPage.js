import React from 'react'
import './AboutPage.css'
import '../Misc/Scrollbar.css'
import Navbar from '../../Components/Navbar/Navbar'
import HomeButton from '../../Components/Buttons/HomeButton.js'
import BookNow from '../../Components/Buttons/BookNow'

const AboutPage = () => {
    return (
        <div className='root'>
            <header className='header'>
                <Navbar />
            </header>
            <body className='body-about'>
                <h1></h1>
               <p></p>
            </body>
            <footer>
                <HomeButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default AboutPage

import React from 'react'
import './AboutWebPage.css'
import '../Scrollbar.css'
import HomeButton from '../../Components/Buttons/HomeButton'
import ContactNow from '../../Components/Buttons/ContactNow.js'
import Navbar from '../../Components/Navbar/Navbar'
import AboutWeb from '../../Components/AboutWeb/AboutWeb'


const WebPage = () => {
    return (
        <div>
            <header className='header'>
                <Navbar />
            </header>
            <main className='body-web'>
                <AboutWeb/>
            </main>
            <footer>
                <HomeButton />
                <ContactNow />
            </footer>
        </div>
    )
}

export default WebPage


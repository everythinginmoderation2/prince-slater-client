import React from 'react'
import './HomePage.css'
import '../Scrollbar.css'
import HomeButton from '../../Components/Buttons/HomeButton'
import ContactNow from '../../Components/Buttons/ContactNow.js'
import Navbar from '../../Components/Navbar/Navbar'


const HomePage = () => {
    return (
        <div>
            <header className='header'>
                <Navbar />
            </header>
            <main id="body" className='body-home'>
            </main>
            <footer>
                <HomeButton />
                <ContactNow />
            </footer>
        </div>
    )
}

export default HomePage


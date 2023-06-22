import React from 'react'
import './HomePage.css'
import '../Misc/Scrollbar.css'
import './Max700.css'
import HomeButton from '../../Components/Buttons/HomeButton'
import ContactNow from '../../Components/Buttons/ContactNow.js'
import Navbar from '../../Components/Navbar/Navbar'


const HomePage = () => {
    return (
        <div className='root'>
            <header className='header'>
                <Navbar />
            </header>
            <body className='body-home'>
            </body>
            <footer>
                <HomeButton />
                <ContactNow />
            </footer>
        </div>
    )
}

export default HomePage


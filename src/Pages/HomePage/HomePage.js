import React from 'react'
import './HomePage.css'
import '../Misc/Scrollbar.css'
import './Max700.css'
import LogoButton from '../../Components/LogoButton/LogoButton'
import BookNow from '../../Components/Buttons/BookNow.js'
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
                <LogoButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default HomePage


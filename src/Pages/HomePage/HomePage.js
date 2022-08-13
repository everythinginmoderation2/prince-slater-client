import React from 'react'
import './HomePage.css'
import '../Misc/Scrollbar.css'
import './Max700.css'
import HomeButton from '../../Components/Buttons/HomeButton'
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
                <HomeButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default HomePage


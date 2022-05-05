import React from 'react'
import './AboutPage.css'
import '../Misc/Scrollbar.css'
import Navbar from '../../Components/Navbar/Navbar'
import LogoButton from '../../Components/LogoButton/LogoButton'
import BookNow from '../../Components/Buttons/BookNow'
import { Link } from "react-router-dom";

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
                <LogoButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default AboutPage

import React from 'react'
import './StreamPage.css'
import '../Misc/Scrollbar.css'
import Navbar from '../../Components/Navbar/Navbar'
import HomeButton from '../../Components/Buttons/HomeButton'
import BookNow from '../../Components/Buttons/BookNow'
import { Link } from "react-router-dom";
import MediaStreamGrid from '../../Components/Grid/MediaStreamGrid'

const StreamPage = () => {
    return (
        <div className='root'>
            <header className='header'>
                <Navbar />
            </header>
            <body className='body-stream'>
             <MediaStreamGrid/>
            </body>
            <footer>
                <HomeButton/>
                <BookNow/>
            </footer>
        </div>
    )
}

export default StreamPage

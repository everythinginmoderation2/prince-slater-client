import React from 'react'
import './StreamPage.css'
import '../Misc/Scrollbar.css'
import Navbar from '../../Components/Navbar/Navbar'
import HomeButton from '../../Components/Buttons/HomeButton'
import ContactNow from '../../Components/Buttons/ContactNow'
// import { Link } from "react-router-dom";
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
                <ContactNow/>
            </footer>
        </div>
    )
}

export default StreamPage

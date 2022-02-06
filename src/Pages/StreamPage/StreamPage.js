import React from 'react'
import './StreamPage.css'
import '../Misc/Scrollbar.css'
import Navbar from '../../Components/Navbar/Navbar'

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
                <Link to="/"><div className="logo-image" /></Link>
                <button className="book-now-button">
                    <a href="https://calendly.com/ps--39/singer-songwriter-training-sessions"
                        target="_blank"
                        rel="noreferrer">Book <br /> Now</a></button>
            </footer>
        </div>
    )
}

export default StreamPage

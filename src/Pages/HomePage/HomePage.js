import React from 'react'
import './HomePage.css'
import '../Misc/Scrollbar.css'
import './Max700.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className='root'>
            <header className='header'>
                <Navbar />
            </header>
            <body className='body'>
                <row>
                    <col></col>
                </row>
                <row></row>
                <row></row>
            </body>
            <footer>
            <Link to="/"><div className="logo-image" /></Link>
            <button className="booking-button">
            <a href="https://calendly.com/ps--39/singer-songwriter-training-sessions" 
            target="_blank"  
            rel="noreferrer">Book <br/> Now</a></button>
            </footer>
        </div>
    )
}

export default HomePage


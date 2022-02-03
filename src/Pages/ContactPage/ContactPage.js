import React from 'react'
import './ContactPage.css'
import '../Misc/Scrollbar.css'
import Navbar from '../../Components/Navbar/Navbar'

import { Link } from "react-router-dom";

const ContactPage = () => {
    return (
        <div className='root'>
            <header className='header'>
                <Navbar />
            </header>
            <body className='body'>
                <div className="contact">
                <h1>Wish to book an event with me at your venue?</h1>
                    <iframe 
                    className="google"
                    title="google-form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdIcUlPHFCW6fKcve8_Wr2otDV13ArE9P-0YDpRyxmiMp-_dg/viewform?embedded=true" 
                    width={800} height={861} frameBorder={0} marginHeight={0} marginWidth={0} style={{overflowY: 'unset'}}>Loading…</iframe>
                </div>
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

export default ContactPage

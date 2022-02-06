import React from 'react'
import './ContactPage.css'
import '../Misc/Scrollbar.css'
import Navbar from '../../Components/Navbar/Navbar'

import { Link } from "react-router-dom";
import LogoButton from '../../Components/LogoButton/LogoButton';
import BookNow from '../../Components/Buttons/BookNow';

const ContactPage = () => {
    return (
        <div className='root'>
            <header className='header'>
                <Navbar />
            </header>
            <body className='body'>
                <div className="contact">
                <h1>Have any questions?</h1>
                    <iframe 
                    className="google"
                    title="google-form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdIcUlPHFCW6fKcve8_Wr2otDV13ArE9P-0YDpRyxmiMp-_dg/viewform?embedded=true" 
                    width={800} height={861} frameBorder={0} marginHeight={0} marginWidth={0} style={{overflowY: 'unset'}}>Loading…</iframe>
                </div>
            </body>
            <footer>
                <LogoButton />
               <BookNow />
            </footer>
        </div>
    )
}

export default ContactPage

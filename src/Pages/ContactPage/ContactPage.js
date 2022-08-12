import React from 'react'
import './ContactPage.css'
import '../Misc/Scrollbar.css'
import Navbar from '../../Components/Navbar/Navbar'

import { Link } from "react-router-dom";
import LogoButton from '../../Components/LogoButton/LogoButton';
import BookNow from '../../Components/Buttons/BookNow';

const ContactPage = () => {
    return (
        <div>
            <body className='contact'>
                <h1>Have any questions?</h1>
                <br/>
                <br/>
                <h2>Phone/Zalo/WhatsApp: +84707396342</h2>
                <br/>
                <br/>
                <h2>Instagram: aneducatedguesser</h2>
                <br/>
                <br/>
                <h2>Email: ps@princeslater.com</h2>
            </body>
            <footer>
                <LogoButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default ContactPage

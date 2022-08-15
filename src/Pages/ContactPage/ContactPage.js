import React from 'react'
import './ContactPage.css'
import '../Misc/Scrollbar.css'
import Navbar from '../../Components/Navbar/Navbar'
import HomeButton from '../../Components/Buttons/HomeButton.js';
import BookNow from '../../Components/Buttons/BookNow';
import Socials from '../../Components/Socials/Socials'

const ContactPage = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <body className='contact'>
                <Socials/>
                {/* <h1>Have any questions?</h1>
                <br />
                <br />
                <h2>Phone/Zalo/WhatsApp: +84707396342</h2>
                <br />
                <br />
                <h2>Instagram: aneducatedguesser</h2>
                <br />
                <br />
                <h2>Email: ps@princeslater.com</h2> */}
            </body>
            <footer>
                <HomeButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default ContactPage

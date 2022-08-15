import React from 'react'
import './ContactPage.css'
import '../Misc/Scrollbar.css'
import Navbar from '../../Components/Navbar/Navbar'
import HomeButton from '../../Components/Buttons/HomeButton.js';
import BookNow from '../../Components/Buttons/BookNow';
import {socialInfo} from '../../Components/Socials/socialInfo'
import SocialDisplay from '../../Components/SocialDisplay/SocialDisplay';

const ContactPage = () => {

    const rows = []
    socialInfo.forEach(
        function ( { company, username, link, source }) {
            rows.push(<SocialDisplay key={`${company}`} 
            company={company} username={username} 
            source={source} link={link}/>)
        return
    })

   
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div className='contact'>
               {rows}
            </div>
            <footer>
                <HomeButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default ContactPage

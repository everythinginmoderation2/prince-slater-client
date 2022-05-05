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
                <div className="form">
                    <form action="/action_page.php" method="get">
                        <label for="name">Name: </label>
                        <input type="text" id="name" name="name" />
                        <br />
                        <label for="email">Email: </label>
                        <input type="text" id="email" name="email" />
                        <br />
                        <textarea id="about" name="about"
                            placeholder='Want to know anything in particular?'
                        />
                        <br />
                        <button className="submit"
                            type="submit" value="Submit">
                            Submit</button>
                    </form>
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

import React from 'react'
import './BookingPage.css'
import '../Misc/Scrollbar.css'
import './Max700.css'
import HomeButton from '../../Components/Buttons/HomeButton.js'
import BookNow from '../../Components/Buttons/BookNow.js'
import Service from '../../Components/Service/Service'


const BookingPage = () => {
    return (
        <div className='root'>
            <body className='body-welcome'>
               <Service />
            </body>
            <footer>
                <HomeButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default BookingPage


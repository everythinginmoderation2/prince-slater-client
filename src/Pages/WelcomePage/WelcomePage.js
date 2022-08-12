import React from 'react'
import './WelcomePage.css'
import '../Misc/Scrollbar.css'
import './Max700.css'
import LogoButton from '../../Components/LogoButton/LogoButton'
import BookNow from '../../Components/Buttons/BookNow.js'
import Service from '../../Components/Service/Service'


const WelcomePage = () => {
    return (
        <div className='root'>
            <body className='body-welcome'>
               <Service />
            </body>
            <footer>
                <LogoButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default WelcomePage


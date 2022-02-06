import React from 'react'
import './WelcomePage.css'
import '../Misc/Scrollbar.css'
import './Max700.css'
import LogoButton from '../../Components/LogoButton/LogoButton'
import BookNow from '../../Components/Buttons/BookNow.js'
import Navbar from '../../Components/Navbar/Navbar'
import ServicesTable from '../../Components/Table/ServicesTable'


const WelcomePage = () => {
    return (
        <div className='root'>
            <body className='body-welcome'>
                <ServicesTable />
            </body>
            <footer>
                <LogoButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default WelcomePage


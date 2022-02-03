import React from 'react'
import './HomePage.css'
import '../Misc/Scrollbar.css'
import './Max700.css'
import Navbar from '../../Components/Navbar/Navbar'
import ServicesTable from '../../Components/Table/ServicesTable'
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className='root'>
            <header className='header'>
                <Navbar />
            </header>
            <body className='body'>
                <ServicesTable />
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

export default HomePage


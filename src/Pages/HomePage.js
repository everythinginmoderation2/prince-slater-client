import React from 'react'
import './HomePage.css'
import HomeHeader from '../Components/HomeHeader/HomeHeader'
import Footer from '../Components/Footer/Footer';

const HomePage = () => {
    return (
        <div className="root">
            <section className='section-header'>
                <div className='div-navbar'>
                    <HomeHeader className='navbar' />
                </div>
                <div className='section-header-padding-message'><h1>In Stores Now</h1></div>
            </section>
            <section className='section-body'>
                <div className="banner"><img src="https://github.com/everythinginmoderation2/prince-slater-client/blob/16f6a5e8361d0def4d5fec9a172c0961df6e4dce/src/Images/hand_and_guitar.jpeg" alt=""></img></div>
                <div className="div-body">
                    <div className="back-top">
                        {/* <text className='text-scroll'>Visit</text> */}
                    </div>
                    <div className="back-bottom"></div>
                    <div className="front">
                        <div className="front-left"></div>
                        <div className="front-right"></div>
                    </div>
                </div>
                <footer className="footer">
                    <h1>Contact Me</h1>
                </footer>
            </section>

        </div>
    )
}

export default HomePage


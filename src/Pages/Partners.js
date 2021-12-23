import React from 'react'
import './HomePage.css'
import HomeHeader from '../Components/HomeHeader/HomeHeader'
import Footer from '../Components/Footer/Footer';

const HomePage = () => {
    return (
        <div className="root">
            <section className='section-header'>
                <div className='div-navbar' id="div-navbar">
                    <HomeHeader className='navbar' />
                </div>
            </section>
            <section className='section-body'>
                <div className='banner'>
                    <img src="/Images/arms_back.jpeg" alt=""/>
                    <h1>None yet. That's where you come in...</h1>
                </div>
            </section>
            <section className='section-footer'>
                <div className='div-footer'>
                    <Footer className='footer' />
                </div>
            </section>
        </div>
    )
}

export default HomePage

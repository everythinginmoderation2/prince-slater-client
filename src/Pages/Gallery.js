import React from 'react'
import './HomePage.css'
import './Partners.css'
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
                <h1>Coming soon...</h1>
                <div className='banner'>
                    <img src="/Images/arms_back.jpeg" alt="" />
                </div>
            </section>
                <div className='div-footer'>
                    <Footer className='footer' />
                </div>
        </div>
    )
}

export default HomePage
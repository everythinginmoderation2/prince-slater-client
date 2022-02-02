import React from 'react'
import './HomePage.css'
import './Partners.css'
import HomeHeader from '../Components/HomeHeader/HomeHeader'

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
        </div>
    )
}

export default HomePage

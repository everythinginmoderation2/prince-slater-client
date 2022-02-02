import React from 'react'
import HomeHeader from '../Components/HomeHeader/HomeHeader'
import ServicesTable from '../Components/ServicesTable/ServicesTable'
import InstructorDescription from '../Components/InstructorDescription/InstructorDescription'
import './HomePage.css'
import './Scrollbar.css'
/*Importation Order Must Not Change!*/
import './HPResLayouts/HPSmallDesktop.css'
import './HPResLayouts/HPiPadMini.css'
import './HPResLayouts/HPiPhoneSE.css'
import './HPResLayouts/HPiPadAir.css'
import './HPResLayouts/HPSurfacePro7.css'
import './HPResLayouts/HPlandscape.css'

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
                <div className="bannerHP">
                <div className="services-table"><ServicesTable/></div>
                <div className="instructor-description"><InstructorDescription/></div>
                </div>
                <div className="div-body">
                    <div className="back-top">
                        {/* <text className='text-scroll'>Visit</text> */}
                    </div>
                    <div className="back-bottom"></div>
                </div>
                <footer className="footer">
                <h1><a href="https://www.instagram.com/aneducatedguesser/" target="_blank" rel="noreferrer">Contact Me</a></h1>
                </footer>
            </section>

        </div>
    )
}

export default HomePage


import React from 'react'
import './HomePage.css'
import './Scrollbar.css'
/*Importation Order Must Not Change!*/
import './HPResLayouts/HPSmallDesktop.css'
import './HPResLayouts/HPiPadMini.css'
import './HPResLayouts/HPiPhoneSE.css'
import './HPResLayouts/HPiPadAir.css'
import './HPResLayouts/HPSurfacePro7.css'
import './HPResLayouts/HPlandscape.css'

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
                        {/* SoundCloud & YouTube */}
                        <div className="front-left"><iframe title="PS" width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1116844174&color=%23031b44&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" /><div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}><a href="https://soundcloud.com/prince-slater" title="PS" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>PS</a> · <a href="https://soundcloud.com/prince-slater/wait-any-more-longer-more" title="Wait Any Longer (More Longer)" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Wait Any Longer (More Longer)</a></div></div>
                        <div className="front-right"><iframe title="PS" width="100%" height="100%" src="https://www.youtube.com/embed/oY2h3aBlmQ8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
                    </div>
                </div>
                <footer className="footer">
                <h1><a href="https://www.instagram.com/aneducatedguesser/" target="_blank" rel="noreferrer">Contact Me</a></h1>
                </footer>
            </section>

        </div>
    )
}

export default HomePage


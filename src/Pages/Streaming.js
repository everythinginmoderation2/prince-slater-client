import React from 'react'
import {Link} from 'react-router-dom'
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
                <h1><a href="https://distrokid.com/hyperfollow/princeslater/settle-down" target="_blank" rel="noreferrer">Stream everywhere</a></h1>
                {/* Apple/iTunes */}
                <iframe allow="autoplay *; encrypted-media *; fullscreen *"
                    title="apple"
                    frameBorder={0} height={450}
                    style={{ width: '40%', maxWidth: '100%', overflow: 'hidden', background: 'transparent' }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.music.apple.com/us/album/flow-state-ii-ep/1537304415" />
                    {/* Spotify */}
                <iframe style={{ borderRadius: '12px' }}
                    title="spotify"
                    src="https://open.spotify.com/embed/artist/3KSgfnFDc3bjDC75U4oUfo?utm_source=generator"
                    width="60%" height={450} frameBorder={0}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                {/* Amazon */}
                <iframe id="AmazonMusicEmbedB07V4WKYT5"
                    title="amazon"
                    src="https://music.amazon.com/embed/B07V4WKYT5/?id=TfOEed7X5M&marketplaceId=ATVPDKIKX0DER&musicTerritory=US"
                    width="100%"
                    height="550px"
                    style={{ border: '1px solid rgba(0, 0, 0, 0.12)', maxWidth: '' }} />
                
                <Link to="/"><div className='banner'><img src="/Images/arms_back.jpeg" alt="" /></div></Link>
                
            </section>
            <div className='div-footer'>
                <Footer className='footer' />
            </div>
        </div>
    )
}

export default HomePage
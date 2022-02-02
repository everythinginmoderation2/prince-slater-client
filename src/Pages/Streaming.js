import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import './Streaming.css'
import HomeHeader from '../Components/HomeHeader/HomeHeader'
const HomePage = () => {
    return (
        <div className="root">
            <section className='section-header'>
                <div className='div-navbar' id="div-navbar">
                    <HomeHeader className='navbar' />
                </div>
            </section>
            <section className='section-body streaming'>
                <h1><a href="https://distrokid.com/hyperfollow/princeslater/settle-down" target="_blank" rel="noreferrer">Stream everywhere</a></h1>
                {/* Apple/iTunes */}
                <iframe allow="autoplay *; encrypted-media *; fullscreen *"
                    title="apple"
                    frameBorder={0} height={450}
                    style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', background: 'transparent' }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.music.apple.com/us/album/flow-state-ii-ep/1537304415" />
                {/* Spotify */}
                <iframe style={{ borderRadius: '12px' }}
                    title="spotify"
                    src="https://open.spotify.com/embed/artist/3KSgfnFDc3bjDC75U4oUfo?utm_source=generator"
                    width="100%" height={450} frameBorder={0}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                {/* row */}
                <div className="row">
                    {/* Amazon */}
                    <iframe
                        className="amazon"
                        id="AmazonMusicEmbedB07V4WKYT5"
                        title="amazon"
                        src="https://music.amazon.com/embed/B07V4WKYT5/?id=TfOEed7X5M&marketplaceId=ATVPDKIKX0DER&musicTerritory=US"
                        height="100%"
                        width="100%"
                        style={{ border: '1px solid rgba(0, 0, 0, 0.12)' }} />
                    {/* SoundCloud */}
                    <div className="soundcloud"><iframe title="PS"
                        width='100%'
                        height="100%" scrolling="no" frameBorder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1116844174&color=%23031b44&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                    </div>
                </div>
                {/* YouTube */}
                <iframe className="youtube" width="100%" height="100%" src="https://www.youtube.com/embed/ePFQMQUaqwk?start=230"
                    title="YouTube video player" frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
            </section>
            {/* <Link to="/"><div className='banner'><img src="/Images/arms_back.jpeg" alt="" /></div></Link> */}
        </div>
    )
}

export default HomePage
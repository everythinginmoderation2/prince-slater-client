import React from 'react'
import './AboutPage.css'
import '../Misc/Scrollbar.css'
import Navbar from '../../Components/Navbar/Navbar'

import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className='root'>
            <header className='header'>
                <Navbar />
            </header>
            <body className='body'>
                <h1>What's the purpose?</h1>
                <p>
                    A little over 10 years ago, I was interested in having a website for my band at that time.
                    I was less instrumentally savvy than my band mates, so my confidence in other areas
                    often made positive contributions to our overall production and workflow.
                </p>
                <br />
                <p>
                    We were missing this thing though. Wix and other site-builders were just debuting, but we
                    had none. Neither paid, self-made or even delayed. It was clear that my intentions were
                    a bit premature. My heart was in the right place. I understood that we only had our
                    'backyard acoustic' shabby, video and audio recordings. Often, performances would end
                    with people asking for a website or audio recordings. Which made it easier to care less
                    about the quality of our material and instead urge to get us on the map.
                </p>
                <br />
                <p>
                    With faith and patience, I would eventually make it happen. I had to learn
                    to play an instrument first; grow as a soloist; reach humbling lengths as a musician
                    that helped me curate realistic expectations and a quite, stretchy timeline.
                    I did mention that I have been patient, right?
                </p>
                <br />
                <p>
                    Now, as of February 3rd, 2022, I've got it. No, not that. Not the 'f' word...
                    fame, but some internet real estate for hosting recordings, projects, future plans,
                    etc.
                </p>
                <br />
                <br />
                <h1>Wait. So, isn't this all a little...</h1>
                <p>
                    <em>Yes, Alanis, it is a little too ironic.</em>Yah, I could've paid someone to build it. 
                    I didn't though. While, during the most unsure of times, usually approaching sorts of 
                    breakthroughs perspective shifts, or teaching moments, I gained a clear projection of
                    what I'd be capable of if I worked for it.
                    <br />
                    <p>Had I paid for it, I wouldn't have gotten such a priceless return.</p>
                </p>
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

export default AboutPage

import React from 'react'
import {Link} from 'react-router-dom'
import './SocialDisplay.css'
import facebook from "../Socials/Facebook.png"
import instagram from "../Socials/Instagram.png"
import youtube from "../Socials/Youtube.png"


function SocialDisplay({ company, source, link, username }) {
    function choose(source) {
        if (source === 'Facebook') return facebook;
        if (source === 'Instagram') return instagram;
        if (source === 'Youtube') return youtube;
    }
    return (
        <div className="social">
            <div className="img-company">
                <Link to={link} target='_blank'>
                    <img className="social-logo" id={company} src={choose(source)} alt={company} />
                    </Link>
                <h2 className="company">{company}</h2>
               
            </div>
            {/* <h3 className='username'>{username}</h3> */}
        </div>
    )
}

export default SocialDisplay
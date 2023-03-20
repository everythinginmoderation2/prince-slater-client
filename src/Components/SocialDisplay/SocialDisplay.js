import React from 'react'
import './SocialDisplay.css'
import facebook from "../Socials/Facebook.png"
import instagram from "../Socials/Instagram.png"
import youtube from "../Socials/Youtube.png"


function SocialDisplay({ company, source, link}) {
    function choose(source) {
        if (source === 'Facebook') return facebook;
        if (source === 'Instagram') return instagram;
        if (source === 'Youtube') return youtube;
    }
    return (
        <div className="social">
            <div className="img-company">
                <a href={`${link}`} target='_blank' rel="noreferrer">
                    <img className="social-logo" id={company} src={choose(source)} alt={company} />
                    </a>
                <h2 className="company">{company}</h2>
               
            </div>
        </div>
    )
}

export default SocialDisplay
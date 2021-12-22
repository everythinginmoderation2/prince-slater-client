import React from 'react';
import './HomeHeader.css';
import {Link} from "react-router-dom";

const HomeHeader = () => {
    return (
        <div>
            <header className="header">
                <nav className="navbar">
                    <div className="left-end--nav"><h1><Link to="/about" style={{margin: 0, padding: 0}}>Welcome</Link></h1></div>
                    <div className="right-end--nav">
                        <div><Link to="/">Proper Slang</Link></div>
                        <div><a href="./here" target="blank" alt="">Maitre Hookz</a></div>
                        <div><a href="./here" target="blank" alt="">Cuoolingo</a></div>
                        <div><a href="./here" target="blank" alt="">Partners</a></div>
                    </div>
                </nav>
                <div className="next-row">
                    <h3>to where curiousity continues to be met by creativity.</h3>
                    <h4>Status: currently finishing guitar teaching website</h4>
                </div>
            </header>
        </div>
    )
}

export default HomeHeader

import React from 'react';
import './HomeHeader.css';
import {Link} from "react-router-dom";

const HomeHeader = () => {
    return (
        <div>
            <header className="header">
                <nav className="navbar">
                    <div className="left-end--nav"><Link to="/" style={{margin: 0, padding: 0, fontSize: '2rem'}}><h1>Welcome</h1></Link></div>
                    <div className="right-end--nav">
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/streaming">Streaming</Link></div>
                        <div><Link to="/gallery">Gallery</Link></div>
                        <div><Link to="/partners">Partners</Link></div>
                    </div>
                </nav>
                <div className="next-row">
                    <h3>to where curiousity continues to be met by creativity.</h3>
                    <h4>Status: probably sleeping</h4>
                </div>
            </header>
        </div>
    )
}

export default HomeHeader

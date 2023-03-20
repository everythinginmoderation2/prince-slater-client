import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className='links'>
                <li><Link to="/booking">booking</Link></li>
                <li><Link to="/stream">stream</Link></li>
            </ul>
        </div>
    )
}

export default Navbar


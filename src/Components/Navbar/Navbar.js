import React from 'react';
import './Navbar.css';
import BookNow from '../Buttons/BookNow'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <div className="logo-image" />
                </Link>
            </div>
            <ul className='links'>
                <li><Link to="/">home</Link></li>
                <li><Link to="/music">stream now</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar


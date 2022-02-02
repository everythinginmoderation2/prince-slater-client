import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="links">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/streaming">Streaming</Link></div>
                    <div><Link to="/upcoming">What's next</Link></div>
                    <div><Link to="/contact">Contact</Link></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

{/* <div className="icon"><Link to="/"><h1>Image Icon Here</h1></Link></div> */ }
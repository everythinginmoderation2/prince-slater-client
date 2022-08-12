import React from 'react';
import './LogoButton.css'
import { Link } from "react-router-dom";

const LogoButton = () => {
  return <div>
    <Link to="/home"><div className="logo-image" /><h3 className="home-page">Home Page</h3></Link>
  </div>;
};

export default LogoButton;

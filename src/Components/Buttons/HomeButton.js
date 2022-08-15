import React from 'react';
import './HomeButton.css'
import { Link } from "react-router-dom";

const HomeButton = () => {
  return <div>
    <Link to="/"><div className="logo-image" /><h3 className="home-page-button">Home Page</h3></Link>
  </div>;
};

export default HomeButton;

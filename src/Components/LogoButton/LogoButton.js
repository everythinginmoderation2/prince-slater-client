import React from 'react';
import './LogoButton.css'
import { Link } from "react-router-dom";

const LogoButton = () => {
  return <div>
    <h3 className="click-below">Home Page</h3>
    <Link to="/home"><div className="logo-image" /></Link>
  </div>;
};

export default LogoButton;

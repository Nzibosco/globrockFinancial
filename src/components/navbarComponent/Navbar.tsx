import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      <Link className="navbar-brand" to='' id="logo">GlobRock Financial</Link>
      <button id= "navButton" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span id= "navToggler" className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav" id="nav-links">
          <Link className="nav-link active" to='/about' id="about">About</Link>
          <Link className="nav-link active" to='/services' id="service">Services</Link>
          <Link className="nav-link active" to='/contact' id="contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}
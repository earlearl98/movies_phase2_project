import React from 'react'
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
    <div className="navbar-container">
      <div className="logo-container"><h1 className="logo">EARL'S</h1></div>
      <div className="menu-container">
        <ul className="menu-list">
          <button id="home-button">Home</button>

          <header>
            <form id="form">
              <input type="text" id="search" className="search" placeholder="Search me...."/>
            </form>

          </header>

        </ul>
      </div>
      <div className="profile-container">
        <img className="profile-picture" src="images/me1.jpeg" alt="profile-pic"/>
        <div className="profile-container-text">
          <span className="profile-text">Profile</span>
          <i className="fa-solid fa-caret-down"></i>
        </div>
       

      </div>


    </div>
  </div>
  )
}

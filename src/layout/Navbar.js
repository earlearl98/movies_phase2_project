import React from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-black ">

    <div className="navbar-container ">

      <div className="logo-container"><h1 className="logo">EARL'S</h1></div>

      <div className="menu-container item1  " >

      <ul className="navbar-nav">
       
        <li className="nav-item">
          <Link className="nav-link  text2"  to="/">MOVIES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text2"  to="/about">ABOUT</Link>
        </li>
        
       

        <li className="nav-item">
          <Link className="nav-link text2" to="/addmovies">NEW </Link>
        </li>
       
      
      </ul>
      </div>

      
      <div className="profile-container col-md-1">
        <img className="profile-picture img-fluid" src="https://www.themoviedb.org/t/p/w1280/r935SMphvXppx5bJjbIBNx02fwc.jpg" alt="profile-pic" />
        <div className="profile-container-text ">
          <span className="profile-text bg-black ">Profile</span>
          
        </div>
       

      </div>


    </div>
    </nav>
  </div>
  );
}

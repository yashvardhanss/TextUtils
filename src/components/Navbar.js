/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand nav-link" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-hrefggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}

          <div className="dropdown mx-4">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Choose Mode
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={props.changeViolet} href="#">Violet</a></li>
              <li><a className="dropdown-item" onClick={props.changeRed} href="#">Red</a></li>
              <li><a className="dropdown-item" onClick={props.changeYellow} href="#">Yellow</a></li>
            </ul>
          </div>

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>

        </div>
      </div>
    </nav>
  )
}


//proptypes
//here isrequired means ki aapko uski value define krni hi hogi wrna error aa jayega
//or basically props undefine na ho ye ensure krne ke liye isRequired ka use krte hai
Navbar.propTypes = {
                    title: PropTypes.string.isRequired,
                    about: PropTypes.string.isRequired
};

//default props{jab props ko pass na kare tab inn default values ko use krlena}
Navbar.defaultProps = {
  title:"Set title here",
  about:"About text here"
};
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Route,
  Switch
} from 'react-router-dom';

import DropDown from './drop_down';

const Navbar = ({ currentUser, logout }) => {
    let path;
    if (currentUser) {
        path = "/home";
    } else {
        path = "/"
    }

    const navLeft = 
    <span className="nav-left">
            <Link to={path} >
                <img src={window.logoURL}/>
                <h1 className="nav-logo">Pintage</h1>
            </Link>
        </span>;
        
    let navRight;
    if (currentUser) {
        navRight = 
            <span className="nav-right">
                <ul className="angle-drop-down">
                    <DropDown logout={logout}/>
                    <button className="angle-button">
                        <i className="fas fa-angle-down"/>
                    </button>
                </ul>
            </span>
    } else {
        navRight = 
            <span className="nav-right">
                <Link className="nav-login" to="/login">Log In</Link>
                <Link className="nav-signup" to="/signup">Sign Up</Link>
            </span>
    }

    return (
        <nav className="nav-bar">
            {navLeft}
            {navRight}
        </nav>
    );
}

export default Navbar;
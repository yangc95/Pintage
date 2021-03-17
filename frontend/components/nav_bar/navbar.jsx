import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
    const navLeft = 
        <span className="nav-left">
            <Link to="/" >
                <img src={window.logoURL}/>
                <h1 className="nav-logo">Pintage</h1>
            </Link>
        </span>;
        
    let navRight;
    if (currentUser) {
        navRight = 
            <span className="nav-right">
                <ul className="angle-drop-down">
                    <button className="angle-button">
                        <i class="fas fa-angle-down"/>
                    </button>
                    <li onClick={logout}>
                        Log Out
                    </li>
                </ul>
            </span>
    } else {
        navRight = 
            <span className="nav-right">
                <Link className ="nav-login" to='/login'>Log In</Link>
                <Link className ="nav-signup" to='/signup'>Sign Up</Link>
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
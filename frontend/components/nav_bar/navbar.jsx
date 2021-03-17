import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
    const navBar = () => (
        <nav className="nav-bar">
            <Link to="/" >
                <img src={window.logoURL}/>
                <h1 className="nav-logo">Pintage</h1>
            </Link>
            <span className="nav-right">
                <Link className ="nav-login" to='/login'>Log In</Link>
                <Link className ="nav-signup" to='/signup'>Sign Up</Link>
            </span>
        </nav>
    );
    

    const navBarUser = () => (
        <nav className="nav-bar">
            <Link to="/" >
                <img src={window.logoURL}/>
                <h1 className="nav-logo">Pintage</h1>
            </Link>
            <span className="nav-right">
                <button className="header-button">Add Toggle Here</button>
                <div className="header-button-container">
                    <button onClick={logout}>Log Out</button> 
                </div>
            </span>
        </nav>
    )

    return currentUser ? navBar() : navBarUser();
}

export default Navbar;
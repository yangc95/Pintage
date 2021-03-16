import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // const navBar = () => (
    //     <nav className="nav-bar">
    //         <Link to="/" >
    //             <img src={window.logoURL}/>
    //             <h1 className="nav-logo">Pintage</h1>
    //         </Link>
    //         <span className="nav-right">
    //             <Link className ="nav-login" to='/login'>Log In</Link>
    //             <Link className ="nav-signup" to='/signup'>Sign Up</Link>
    //         </span>
    //     </nav>
    // )

    // const navBarUser = () => (
    //             <nav className="nav-bar">
    //         <Link to="/" >
    //             <img src={window.logoURL}/>
    //             <h1 className="nav-logo">Pintage</h1>
    //         </Link>
    //         <span className="nav-right">
    //             <button className="" onClick={logout}>Log Out</button>
    //         </span>
    //     </nav>
    // )

    return (
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
    )
}

export default Navbar;
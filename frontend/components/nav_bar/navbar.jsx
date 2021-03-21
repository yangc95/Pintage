import React from 'react';
import { Link } from 'react-router-dom';

import DropDown from './drop_down';

class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.userProfile = this.userProfile.bind(this);
    }

    userProfile() {
        // debugger; ${this.props.currentUser.username}
        this.props.history.push(`/_saved`)
    }

    render () {
        const { currentUser, logout, openModal } = this.props;

        let path;
        let pintage;
        if (currentUser) {
            path = "/home";
            pintage = <h1 className="nav-home-button">Home</h1>
        } else {
            path = "/"
            pintage = <h1 className="nav-logo">Pintage</h1>
        }

        const navLeft = 
        <span className="nav-left">
                <Link to={path} >
                    <img src={window.logoURL}/>
                    {pintage}
                </Link>
            </span>;
            
        let navRight;
        if (currentUser) {
            navRight = 
                <span className="nav-right">
                    <ul className="angle-drop-down">
                        <button onClick={this.userProfile} >Profile</button>
                        <DropDown logout={logout}/>
                        <button className="angle-button" >
                            <i className="fas fa-angle-down"/>
                        </button>
                    </ul>
                </span>
        } else {
            navRight = 
                <span className="nav-right">
                    <button className="nav-login" onClick={() => openModal('login')}>Login</button>
                    <button className="nav-signup" onClick={() => openModal('signup')}>Signup</button>
                </span>
        }

        return (
            <nav className="nav-bar">
                {navLeft}
                {navRight}
            </nav>
        );
    }
}

export default Navbar;
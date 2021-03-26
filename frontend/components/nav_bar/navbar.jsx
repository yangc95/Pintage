import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            dropdown: false,
            home: false
        }
        this.userProfile = this.userProfile.bind(this);
    }

    userProfile() {
        // ; ${this.props.currentUser.username}
        this.props.history.push(`/_saved`)
    }

    render () {
        const { currentUser, logout, openModal } = this.props;
        
        let dropdownButton;
        (this.state.dropdown) ? dropdownButton = 'dropdownActive' : dropdownButton = '' ;

        let homeButton;
        (this.state.home) ? homeButton = 'homeActive' : homeButton = '' ;

        let path;
        let pintage;
        if (currentUser) {
            path = "/home";
            pintage = <button onClick={() => this.setState({home: !this.state.home})} className={`nav-home-button ${homeButton}`}>Home</button>
        } else {
            path = "/"
            pintage = <h1 className="nav-logo">Pintage</h1>
        }


        const navLeft = 
        <span className="nav-left">
                <Link className={`nav-home-buttons ${homeButton}`} onClick={() => this.setState({home: !this.state.home})} to={path} >
                    <img src={window.logoURL}/>
                    {pintage}
                </Link>
            </span>;
            
        let navRight;
        if (currentUser) {
            navRight = 
                <span className="nav-right">
                    <ul className="nav-right-icons">
                        <span className={`drop-down-buttons ${dropdownButton}`} onClick={() => this.setState({dropdown: !this.state.dropdown})}> 
                            <button>   
                                <Link onClick={logout} to="/">Log out</Link>
                            </button>
                        </span>
                        <button className="profile-button" onClick={this.userProfile}>
                            <i className="fas fa-user-alt"></i>
                        </button>
                        <button className="angle-button" onClick={() => this.setState({dropdown: !this.state.dropdown})}>
                            <i className="fas fa-angle-down"/>
                        </button>
                    </ul>
                </span>
        } else {
            navRight = 
                <span className="nav-right">
                    <button className="nav-login" onClick={() => openModal('login')}>Log in</button>
                    <button className="nav-signup" onClick={() => openModal('signup')}>Sign up</button>
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
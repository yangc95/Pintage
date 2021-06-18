import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      dropdown: false,
      home: this.props.navbar,
    }
    this.handleProfile = this.handleProfile.bind(this);
  }

  handleProfile() {
    const { history } = this.props;

    this.setState({ home: false });
    history.push(`/_saved`);
  }

  render () {
    const { session, logout, openModal, navbar, currentUser, activeNavbar, inactiveNavbar } = this.props;
    const { dropdown } = this.state;

    let dropdownButton;
    (dropdown) ? dropdownButton = 'dropdownActive' : dropdownButton = '' ;

    let homeButton;
    (navbar) ? homeButton = 'homeActive' : homeButton = '' ; 

    let path;
    let pintage;
    if (session) {
      path = "/home";
      pintage = <button onClick={() => this.setState({home: !navbar})} className={`nav-home-button ${homeButton}`}>Home</button>
    } else {
      path = "/"
      pintage = <h1 className="nav-logo">Pintage</h1>
    }

    const navLeft = 
    <span className="nav-left">
      <Link className={`nav-home-buttons ${homeButton}`} onClick={() => this.setState({home: navbar})} to={path} >
        <img src={window.logoURL}/>
        {pintage}
      </Link>
    </span>;
        
    let navRight;
    if (session) {
      navRight = 
        <span className="nav-right">
          <ul className="nav-right-icons">
            <span className={`drop-down-buttons ${dropdownButton}`} onClick={() => this.setState({dropdown: !dropdown})}> 
              <button>   
                <Link onClick={logout} to="/">Log out</Link>
              </button>
            </span>
            <button className={`profile-button`} onClick={() => this.handleProfile()}>
              {currentUser.username.split("")[0]}
            </button>
            <button className="angle-button" onClick={() => this.setState({dropdown: !dropdown})}>
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
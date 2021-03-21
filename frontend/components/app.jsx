import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

// import NavbarContainer from './nav_bar/navbar_container';
import NavbarContainer from './nav_bar/navbar_container';
import Landing from './landing/landing';
import HomePageContainer from './home/home_container';
import ProfileContainer from './profile/profile_container'
import BoardFormContainer from './pin_board_form/board_form_container';
import Modal from './modal'
// import LogInFormContainer from './session_form/login_form_container';
// import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { logoutCurrentUser } from '../actions/session_actions';

const App = () => {
  // debugger;
  return (
    <div>
      <Modal/>
      <header>
        {/* <Link to="/" className="header-link"> */}
        <NavbarContainer />
        {/* </Link> */}
        {/* <Landing /> */}
      </header>
      
      <Switch>
        {/* <AuthRoute path="/" component={LogInFormContainer} /> */}
        {/* <AuthRoute path="/" component={SignUpFormContainer} /> */}
        <AuthRoute exact path="/" component={Landing} />
        <ProtectedRoute path={`/_saved`} component={ProfileContainer} />
        <ProtectedRoute exact path="/home" component={HomePageContainer} />
      </Switch>
    </div>
  )
};

export default App;
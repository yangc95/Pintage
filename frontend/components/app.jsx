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
import Modal from './session_form/modal'
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <Modal />
      <header>
        {/* <Link to="/" className="header-link"> */}
        <NavbarContainer />
        {/* </Link> */}
        {/* <Landing /> */}
      </header>
      
      
      <Switch>
        <Route path="/" component={Landing} />
        <AuthRoute path="/" component={LogInFormContainer} />
        <AuthRoute path="/" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/home" component={HomePageContainer} />
        {/* <ProtectedRoute exact path="" component={Container} /> */}
      </Switch>
    </div>
  )
};

export default App;
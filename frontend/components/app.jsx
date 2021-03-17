import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

// import NavbarContainer from './nav_bar/navbar_container';
import NavbarContainer from './nav_bar/navbar_container';
import Landing from './landing/landing';
// import HomePage from 
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <NavbarContainer />
    <Landing />

    <Switch>
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      {/* <ProtectedRoute exact path="" component={Container} /> */}
      {/* <ProtectedRoute exact path="" component={Container} /> */}
      {/* <Route exact path="/" component={Home} /> */}
    </Switch>
  </div>
);

export default App;
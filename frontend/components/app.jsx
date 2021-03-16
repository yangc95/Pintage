import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

// import NavbarContainer from './nav_bar/navbar_container';
import Navbar from './nav_bar/navbar';
// import HomePage from 
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      {/* <Route exact path="/" component={HomePage}/> */}
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
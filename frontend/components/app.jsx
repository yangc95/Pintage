import React from 'react';
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
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Navbar />
    <Switch>
<<<<<<< HEAD
      {/* <Route exact path="/" component={HomePage}/> */}
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
=======
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <ProtectedRoute exact path="" component={Container} /> */}
      {/* <ProtectedRoute exact path="" component={Container} /> */}
      {/* <Route exact path="/" component={Home} /> */}
>>>>>>> auth
    </Switch>
  </div>
);

export default App;
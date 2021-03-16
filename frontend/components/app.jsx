import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" >
          <h1>Pintage</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <ProtectedRoute exact path="" component={Container} /> */}
      {/* <ProtectedRoute exact path="" component={Container} /> */}
      {/* <Route exact path="/" component={Home} /> */}
    </Switch>
  </div>
);

export default App;
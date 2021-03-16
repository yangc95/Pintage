import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/" >
          <h1>Pintage</h1>
      </Link>
    </header>
    <Switch>
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
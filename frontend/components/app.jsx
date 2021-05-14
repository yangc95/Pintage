import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import NavbarContainer from './nav_bar/navbar_container';
import Landing from './landing/landing';
import HomePageContainer from './home/home_container';
import ProfileContainer from './profile/profile_container';
import BoardShowContainer from './board/board_show_container';
import Modal from './modal'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  // ;
  return (
    <div>
      <Modal/>
      <header>
        {/* <Link to="/" className="header-link"> */}
        <NavbarContainer />
        {/* </Link> */}
      </header>
      {/* <body> */}
        <Switch>
          <AuthRoute exact path="/" component={Landing} />
          <ProtectedRoute path={`/_saved`} component={ProfileContainer} />
          <ProtectedRoute exact path="/home" component={HomePageContainer} />
          <ProtectedRoute path="/board" component={BoardShowContainer} />
        </Switch>
      {/* </body> */}
    </div>
  )
};

export default App;
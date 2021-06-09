import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPins } from '../../actions/pin_actions';
// import { fetchUser } from '../../actions/user_actions';
import { activeNavbar, inactiveNavbar } from '../../actions/navbar_actions';

import Home from './home';

const mSTP = ({ session, entities: { users, pins }, ui: { navbar } }) => {
  // debugger;
  return {
    session: session.id,
    currentUser: users[session.id],
    pins: Object.values(pins),
    navbar
  };
};

const mDTP = dispatch => {
	return {
    fetchPins: () => dispatch(fetchPins()),
    activeNavbar: () => dispatch(activeNavbar()),
    inactiveNavbar: () => dispatch(inactiveNavbar()),
	};
};

export default withRouter(connect(mSTP, mDTP)(Home));
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPins, fetchPin } from '../../actions/pin_actions';
// import { fetchUser } from '../../actions/user_actions';
import { activeNavbar, inactiveNavbar } from '../../actions/navbar_actions';

import Home from './home';

const mSTP = ({ session, entities: { users, pins }, ui: { navbar } }) => {
  return {
    session: session.id,
    currentUser: users[session.id],
    pins: Object.values(pins),
    boards: Object.values(users[session.id].boards),
    navbar,
  };
};

const mDTP = dispatch => {
	return {
    fetchPins: () => dispatch(fetchPins()),
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    activeNavbar: () => dispatch(activeNavbar()),
    inactiveNavbar: () => dispatch(inactiveNavbar()),
	};
};

export default withRouter(connect(mSTP, mDTP)(Home));
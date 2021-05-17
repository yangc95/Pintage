import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPins } from '../../actions/pin_actions';
import { activeNavbar, inactiveNavbar } from '../../actions/navbar_actions';

import Home from './home';

const mSTP = ({ session, entities: { users, pins } }) => {
  
  return {
    currentUser: users[session.currentUser],
    pins: Object.values(pins)
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
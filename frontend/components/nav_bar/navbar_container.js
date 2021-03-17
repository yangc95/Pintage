import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mSTP = ({ session, entities} ) => {
  debugger;
  return {
    currentUser: session.users[id]
  };
};

const mDTP = dispatch => {
	return {
		logout: () => dispatch(logout())
	};
};

export default connect(mSTP, mDTP)(Navbar);
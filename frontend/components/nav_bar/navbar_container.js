import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Navbar from './navbar';

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    users
  };
};

const mDTP = dispatch => {
	return {
		logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
	};
};

export default withRouter(connect(mSTP, mDTP)(Navbar));
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { activeNavbar, inactiveNavbar } from '../../actions/navbar_actions';
import Navbar from './navbar';

const mSTP = ({ session, entities: { users }, ui: { navbar} }) => {
  // debugger;
  return {
    session: session.id,
    currentUser: users[session.id],
    users,
    navbar
  };
};

const mDTP = dispatch => {
	return {
		logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    activeNavbar: () => dispatch(activeNavbar()),
    inactiveNavbar: () => dispatch(inactiveNavbar())
	};
};

export default withRouter(connect(mSTP, mDTP)(Navbar));
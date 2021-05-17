import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { openModal, closeModal } from '../../actions/modal_actions';
import { activeNavbar, inactiveNavbar } from '../../actions/navbar_actions';
import { fetchBoards } from '../../actions/board_actions';

import Profile from './profile';

const mSTP = ({ session, entities: { users }}) => {
  return {
    session: session.id,
    currentUser: users[session.id],
    boards: users[session.id].boards
  }
}

const mDTP = dispatch => {
	return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchBoards: userId => dispatch(fetchBoards(userId)),
    activeNavbar: () => dispatch(activeNavbar()),
    inactiveNavbar: () => dispatch(inactiveNavbar())
	}
}

export default withRouter(connect(mSTP, mDTP)(Profile));
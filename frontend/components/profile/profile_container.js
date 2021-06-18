import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { activeNavbar, inactiveNavbar } from '../../actions/navbar_actions';
import { fetchBoards } from '../../actions/board_actions';
import Profile from './profile';

const mSTP = ({ session, entities: { users, boards }}) => {
  // debugger;
  return {
    session: session.id,
    currentUser: users[session.id],
    boards: Object.values(boards),
    pinNums: (Object.keys(users[session.id].boards)).map(key => (
      users[session.id].boards[key].pins.length
    )),
    lastUpdate: (Object.keys(users[session.id].boards)).map(key => (
      users[session.id].boards[key].updated_at
    ))
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
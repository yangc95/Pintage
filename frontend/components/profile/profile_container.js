import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import Profile from './profile';

const mSTP = ({ session, entities: { users, boards } }) => {
// debugger
  return {
    currentUser: users[session.currentUser],
    // users: Object.values(pins),
    boards: Object.values(boards)
    // users[session.id].pins

  };
};

const mDTP = dispatch => {
	return {
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: modal => dispatch(openModal(modal))
    
    
    // fetchUserPins: (userId) => dispatch(fetchUserPins(userId))
	};
};

export default withRouter(connect(mSTP, mDTP)(Profile));
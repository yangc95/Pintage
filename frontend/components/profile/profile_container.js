import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import Profile from './profile';

const mSTP = ({ session, entities: { users }}) => {
  // debugger;
  return {
    session: session.id,
    boards: Object.values(users[session.id].boards)
  };
};

const mDTP = dispatch => {
	return {
    fetchBoards: userId => dispatch(fetchBoards(userId)),
    openModal: modal => dispatch(openModal(modal))
    
    
    // fetchUserPins: (userId) => dispatch(fetchUserPins(userId))
	};
};

export default withRouter(connect(mSTP, mDTP)(Profile));
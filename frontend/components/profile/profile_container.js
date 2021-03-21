import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchBoards } from '../../actions/board_actions'
import Profile from './profile';

const mSTP = ({ session, entities: { users} }) => {
// debugger
  return {
    currentUser: users[session.currentUser],
    // users: Object.values(pins),
    // boards: Object.values(boards)
    // users[session.id].pins
  };
};

const mDTP = dispatch => {
	return {
    // fetchBoards: () => dispatch(fetchBoards())
    // fetchUserPins: (userId) => dispatch(fetchUserPins(userId))
	};
};

export default withRouter(connect(mSTP, mDTP)(Profile));
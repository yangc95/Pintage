import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchUserPins } from '../../actions/pin_actions'
import Profile from './profile';


const mSTP = ({ session, entities: { users } }) => {
// debugger
  return {
    currentUser: users[session.currentUser],
    // users: Object.values(pins),
    users
    // users[session.id].pins
  };
};

const mDTP = dispatch => {
	return {
    // fetchUserPins: (userId) => dispatch(fetchUserPins(userId))
	};
};

export default withRouter(connect(mSTP, mDTP)(Profile));
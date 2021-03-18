import { connect } from 'react-redux';
import Home from './home';

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.currentUser]
  };
};

// const mDTP = dispatch => {
// 	return {
// 	
// 	};
// };

export default connect(mSTP)(Home);
import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions'
import Home from './home';

const mSTP = ({ session, entities: { users, pins } }) => {
  return {
    currentUser: users[session.currentUser],
    pins: Object.values(pins)
  };
};

const mDTP = dispatch => {
	return {
    fetchPins: () => dispatch(fetchPins())
	};
};

export default connect(mSTP, mDTP)(Home);
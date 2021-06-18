import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPins, fetchPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';
import { createPinBoard } from '../../actions/pinboard_actions';
import { activeNavbar, inactiveNavbar } from '../../actions/navbar_actions';

import Home from './home';

const mSTP = ({ session, entities: { users, pins, boards }, ui: { navbar } }) => {
  // debugger;
  return {
    session: session.id,
    currentUser: users[session.id],
    pins: Object.values(pins),
    boards,
    navbar,
  };
};

const mDTP = dispatch => {
	return {
    fetchPins: () => dispatch(fetchPins()),
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    activeNavbar: () => dispatch(activeNavbar()),
    inactiveNavbar: () => dispatch(inactiveNavbar()),
    createPinBoard: (pinId, boardId) => dispatch(createPinBoard)
	};
};

export default withRouter(connect(mSTP, mDTP)(Home));
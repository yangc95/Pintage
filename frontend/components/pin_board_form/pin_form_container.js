import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import { createPin } from '../../actions/pin_actions'
import { fetchBoards } from '../../actions/board_actions';
// import { fetchPin } from '../../actions/pin_actions';

import PinForm from './pin_form';

const mSTP = ({ session, entities: {users, pins} }) => {
  debugger;
  return {
    session: session.id,
    boards: users.boards,
    pins: pins
  };
};

const mDTP = dispatch => {
	return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    createPin: (pin) => dispatch(createPin(pin)),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPin: (pinId) => dispatch(fetchPin(pinId))
	};
};

export default withRouter(connect(mSTP, mDTP)(PinForm));
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PinBoardForm from './pin_board_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ session, entities: { users, pins } }) => {
    // debugger;
  return {
    currentUser: users[session.currentUser],
    pins
  };
};

const mDTP = dispatch => {
	return {
    // fetchPins: () => dispatch(fetchPins())
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
	};
};

export default withRouter(connect(mSTP, mDTP)(PinBoardForm));
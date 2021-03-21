import { connect } from 'react-redux';
import PinBoardForm from './pin_board_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ session, entities: { users, boards } }) => {
    // debugger;
  return {
    currentUser: users[session.currentUser],
    boards
  };
};

const mDTP = dispatch => {
	return {
    // fetchPins: () => dispatch(fetchPins())
    closeModal: () => dispatch(closeModal())
	};
};

export default connect(mSTP, mDTP)(PinBoardForm);
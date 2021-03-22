import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PinForm from './pin_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ session }) => {
  // debugger;
  return {
    // currentUser: users[session.currentUser],
    session: session.id, 
    // pins
  };
};

const mDTP = dispatch => {
	return {
    // fetchPin: () => dispatch(fetchPin())
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
	};
};

export default withRouter(connect(mSTP, mDTP)(PinForm));
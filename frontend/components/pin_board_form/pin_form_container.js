import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PinForm from './pin_form';
import { createPin } from '../../actions/pin_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ session, entities: {users, pins} }) => {
  return {
    session: session.id, 
  };
};

const mDTP = dispatch => {
	return {
    createPin: (pin) => dispatch(createPin(pin)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
	};
};

export default withRouter(connect(mSTP, mDTP)(PinForm));
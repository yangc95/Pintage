import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import { createPin } from '../../actions/pin_actions'

import PinForm from './pin_form';

const mSTP = ({ session, entities: {users, pins} }) => {
  return {
    session: session.id, 
  };
};

const mDTP = dispatch => {
	return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    createPin: (pin) => dispatch(createPin(pin)),
	};
};

export default withRouter(connect(mSTP, mDTP)(PinForm));
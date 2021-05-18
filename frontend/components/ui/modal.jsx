import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import BoardFormContainer from '../pin_board_form/board_form_container';
import PinFormContainer from '../pin_board_form/pin_form_container';
import BoardEditContainer from '../pin_board_form/board_edit_container.jsx';

function Modal({ modal, closeModal }) {
  if (!modal) return null;
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'addBoard':
      component = <BoardFormContainer />;
      break;
    case 'addPin':
      component = <PinFormContainer />;
      break;
    case 'editBoard':
      component = <BoardEditContainer />;
      break;
    default:
      return null;
  }

  if (modal === 'login' || modal === 'signup') {
    return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  )} else if (modal === 'addBoard') {
    return (
    <div className="modal-background" onClick={closeModal}>
        <span className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </span>
    </div>
  )} else {
    return (
    <div className={`modal-background ${modal}`} onClick={closeModal}>
        <span className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </span>
    </div>
  )}
}

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);
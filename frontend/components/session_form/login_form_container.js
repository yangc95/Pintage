import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom'

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mDTP = dispatch => {
  return {
    action: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Not on Pinterest yet? Sign up
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mSTP, mDTP)(SessionForm));
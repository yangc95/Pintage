import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
	return {
		errors: errors.session,
		formType: 'signup',
	};
};

const mDTP = dispatch => {
	return {
		action: (user) => dispatch(signup(user)),
		otherForm: (
			<button onClick={() => dispatch(openModal('Login'))}>
				Already a member? Log in
			</button>
			),
    	closeModal: () => dispatch(closeModal())
	};
};

export default connect(mSTP, mDTP)(SessionForm);
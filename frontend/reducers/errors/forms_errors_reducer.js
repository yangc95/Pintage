import { merge } from 'lodash';
// import {
//     RECEIVE_FORM_ERRORS
// } from '../../actions/pin_actions';
import {
    RECEIVE_FORM_ERRORS,
	CLEAR_ERRORS
} from '../../actions/board_actions';

export default (state = [], action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_FORM_ERRORS:
			return action.errors 
		case CLEAR_ERRORS:
            return [];
		default:
			return state;
	}
};
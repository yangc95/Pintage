import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import forms from './forms_errors_reducer';

export default combineReducers({
  session,
  forms
});
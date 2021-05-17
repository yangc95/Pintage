import { combineReducers } from 'redux';

// // import filters from './filters_reducer';
import modal from './modal_reducer';
import navbar from './navbar_reducer';
// import help from './help_reducer';

export default combineReducers({
//   filters,
    modal,
    navbar,
    // help
});
import { RECEIVE_PINS } from '../../actions/pin_actions';
import { RECEIVE_BOARDS } from '../../actions/board_actions';
import { 
  RECEIVE_CURRENT_USER
} from '../../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  // ;
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, newState, { [action.currentUser.id]: action.currentUser }); 
    // case RECEIVE_PINS:
    //   // ;
    //   return Object.assign({}, newState, { [action.user_id]: action.pins}); 
    // case RECEIVE_BOARDS:
    //   return Object.assign({}, newState, { [action.user_id]: action.boards })
    default: 
      return state;
  }
};

export default usersReducer;
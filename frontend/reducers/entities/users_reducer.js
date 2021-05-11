import { merge } from 'lodash';
import { RECEIVE_PINS } from '../../actions/pin_actions';
import { RECEIVE_BOARDS, RECEIVE_NEW_BOARD, REMOVE_BOARD } from '../../actions/board_actions';
import { 
  RECEIVE_CURRENT_USER
} from '../../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  // ;
  // let newState = Object.assign({}, state)
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, newState, { [action.currentUser.id]: action.currentUser }); 
    // case RECEIVE_PINS:
    //   // ;
    //   return Object.assign({}, newState, { [action.user_id]: action.pins}); 
    case RECEIVE_NEW_BOARD:
      const length = newState[action.board.user_id].boards.length;
      newState[action.board.user_id].boards[length] = action.board;
      return newState;
    case RECEIVE_BOARDS:
      return Object.assign({}, newState, action.boards);
    case REMOVE_BOARD:
      return Object.assign({}, newState, action.boards);
    default: 
      return state;
  }
};

export default usersReducer;
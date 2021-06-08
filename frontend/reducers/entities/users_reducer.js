import { merge } from 'lodash';

import { 
  RECEIVE_BOARDS,
  RECEIVE_NEW_BOARD, 
  REMOVE_BOARD 
} from '../../actions/board_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const nullUserState = Object.freeze({
  id: null,
  email: null,
  username: null,
  boards: null
});

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    // case RECEIVE_CURRENT_USER:
    //   return merge({}, newState, action.currentUser);
    case RECEIVE_NEW_BOARD:
      newState.boards.push(action.board);
      return newState;
    case RECEIVE_BOARDS:
      return merge({}, newState, action.boards);
    case REMOVE_BOARD:
      debugger;
      return merge({}, newState, action.boards);
    default: 
      return state;
  }
};

export default usersReducer;
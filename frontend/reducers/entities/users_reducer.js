import { merge } from 'lodash';

import { 
  RECEIVE_BOARDS,
  RECEIVE_NEW_BOARD, 
  REMOVE_BOARD 
} from '../../actions/board_actions';
import {
  RECEIVE_CURRENT_USER,
} from '../../actions/session_actions';

const nullUser = Object.freeze({
  id: null,
  email: null,
  username: null,
  boards: null,
});

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      debugger;
      return Object.assign({}, newState, { [action.currentUser.id]: action.currentUser } );
    // case RECEIVE_NEW_BOARD:
    //   newState.boards.push(action.board);
    //   return newState;
    // case RECEIVE_BOARDS:
    //   const user = {
    //     id: action.boards.id,
    //     email: action.boards.email,
    //     username: action.boards.username
    //   };
    //   return Object.assign({}, newState, action.boards);
    // case REMOVE_BOARD:
    //   return Object.assign({}, newState, action.boards);
    default: 
      return state;
  }
};

export default usersReducer;
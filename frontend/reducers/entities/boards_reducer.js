import { merge } from 'lodash';
import { 
  RECEIVE_BOARD,
  RECEIVE_BOARDS,
  RECEIVE_NEW_BOARD,
  REMOVE_BOARD,
} from '../../actions/board_actions';

const boardsReducer = (state = {}, action) => {
  // Object.freeze(state);
  let newState = merge({}, state);
  // debugger;
  switch(action.type) {
    case RECEIVE_NEW_BOARD:
      newState[action.board.id] = action.board;
      return newState;
    case RECEIVE_BOARDS:
      // debugger;
      Object.assign(newState, action.boards);
      return newState
    case RECEIVE_BOARD:
      // debugger;
      Object.assign(newState, action.board)
      return newState;
    case REMOVE_BOARD:
      return Object.assign({}, newState, action.boards);      
    default:
      return state;
  }
};

export default boardsReducer;
import { merge } from 'lodash';
import { 
  RECEIVE_BOARD,
  RECEIVE_BOARDS,
  RECEIVE_NEW_BOARD,
  REMOVE_BOARD,
} from '../../actions/board_actions';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  // debugger;
  switch(action.type) {
    case RECEIVE_BOARD:
      return Object.assign({}, newState, action.board)
    case RECEIVE_NEW_BOARD:
      newState.boards.push(action.board);
      return newState;
      case RECEIVE_BOARDS:
      // debugger;
      return Object.assign({}, newState, action.boards);
    case REMOVE_BOARD:
      return Object.assign({}, newState, action.boards);      
    default:
      return state;
  }
};

export default boardsReducer;
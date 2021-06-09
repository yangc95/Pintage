import { merge } from 'lodash';
import { 
  RECEIVE_BOARD,
  RECEIVE_BOARDS
} from '../../actions/board_actions';
import { RECEIVE_PIN } from '../../actions/pin_actions';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    // case RECEIVE_NEW_BOARD:
    //   return Object.assign({}, newState, Object.values(action.boards.boards));
      // return state;
    case RECEIVE_BOARD:
      return Object.assign({}, newState, action.board)
    // case RECEIVE_PIN:
    //   debugger;
    //   return 
    default:
      return state;
  }
};

export default boardsReducer;
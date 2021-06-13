import { merge } from 'lodash';
import { 
  RECEIVE_BOARD,
} from '../../actions/board_actions';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_BOARD:
      return Object.assign({}, newState, action.board)
    default:
      return state;
  }
};

export default boardsReducer;
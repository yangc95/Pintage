import { 
  RECEIVE_BOARDS
} from '../../actions/board_actions';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_BOARDS:
      return Object.assign({}, newState, action.boards);
    default:
      return state;
  }
};

export default boardsReducer;
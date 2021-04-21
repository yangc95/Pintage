import { 
  RECEIVE_BOARD,
  RECEIVE_BOARDS
} from '../../actions/board_actions';

const boardsReducer = (state = {}, action) => {
  // debugger;
  Object.freeze(state);
  // ;
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_BOARDS:
      return Object.assign({}, newState, Object.values(action.boards.boards));
      // return state;
    // case RECEIVE_BOARD:
    //   return Object.assign({}, newState, {[action.board.id - 1]:action.board})
    default:
      return state;
  }
};

export default boardsReducer;
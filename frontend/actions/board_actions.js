import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS'
export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const REMOVE_BOARD = 'REMOVE_BOARD'

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

export const removeBoard = board => ({
  type: REMOVE_BOARD,
  board
});

export const fetchBoards = userId => dispatch => (
    BoardAPIUtil.fetchBoards(userId).then(boards => {
      // debugger;
      return(
        dispatch(receiveBoards(boards))
    )}, err => (null))
);

export const createBoard = board => dispatch => (
  BoardAPIUtil.createBoard(board).then(board => (
    dispatch(receiveBoard(board))
  ), err => (null))
)

export const destroyBoard = board => dispatch => (
  BoardAPIUtil.destroyBoard(board).then(board => (
    dispatch(removeBoard(board))))
)
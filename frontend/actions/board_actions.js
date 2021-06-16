import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS'
export const RECEIVE_NEW_BOARD = 'RECEIVE_NEW_BOARD'
export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const RECEIVE_FORM_ERRORS = 'RECEIVE_FORM_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveNewBoard = board => ({
  type: RECEIVE_NEW_BOARD,
  board
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

export const removeBoard = boards => ({
  type: REMOVE_BOARD,
  boards
});

export const receiveErrors = errors => ({
  type: RECEIVE_FORM_ERRORS,
  errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const fetchBoards = userId => dispatch => (
    BoardAPIUtil.fetchBoards(userId).then(boards => {
      return (
        dispatch(receiveBoards(boards))
    )}, err => (null))
);

export const fetchBoard = boardId => dispatch => (
  BoardAPIUtil.fetchBoard(boardId).then(board => {
    return (
      dispatch(receiveBoard(board))
    )}, err => (null))
);

export const createBoard = board => dispatch => (
  BoardAPIUtil.createBoard(board).then(board => (
    dispatch(receiveNewBoard(board))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
)

export const editBoard = board => dispatch => (
  BoardAPIUtil.editBoard(board).then(boards => (
    dispatch(receiveBoards(boards))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const destroyBoard = board => dispatch => (
  BoardAPIUtil.destroyBoard(board).then(boards => (
    dispatch(removeBoard(boards))))
)
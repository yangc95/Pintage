import * as APIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS'

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const fetchBoards = userId => dispatch => (
    APIUtil.fetchBoards(userId).then(boards => (
        dispatch(receiveBoards(boards))
    ), err => (null))
);

import * as PinBoardAPIUtil from '../util/pinboard_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const createPinBoard = (pinboard) => dispatch => (
  PinBoardAPIUtil.createPinBoard(pinboard).then(boards => (
    dispatch(receiveBoards(boards))
  ), err => (null))
);
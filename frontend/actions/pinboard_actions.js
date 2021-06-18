

export const createPinBoard = (pinId, boardId) => dispatch => (
  BoardAPIUtil.createPinBoard(pinId, boardId).then(pin => (
    dispatch(receivePin(pin))
  ), err => (null))
);
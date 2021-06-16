import * as PinAPIUtil from '../util/pin_api_util';
import { receiveBoard, REMOVE_BOARD } from './board_actions';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
// export const RECEIVE_ONE_PIN = 'RECEIVE_ONE_PIN'

export const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

export const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

// export const removePin = pin => ({
//   type: REMOVE_PIN,
//   pin
// })

// export const receiveOnePin = pin => ({
//   type: RECEIVE_ONE_PIN,
//   pin
// })

export const fetchPins = () => dispatch => (
  PinAPIUtil.fetchPins().then(pins => (
      dispatch(receivePins(pins))
  ), err => (null))
);

export const fetchPin = (pinId) => dispatch => (
  PinAPIUtil.fetchPin(pinId).then(pin => (
      dispatch(receivePin(pin))
  ), err => (null))
);

export const createPin = pin => dispatch => (
  PinAPIUtil.createPin(pin).then(pin => (
    dispatch(receivePin(pin))
  ), err => (null))
);

export const destroyPin = pin => dispatch => (
  PinAPIUtil.destroyPin(pin).then(board => (
    console.log(board)
  ))
)

// export const fetchUserPins = (userId) => dispatch => (
//     APIUtil.fetchUserPins(userId).then(pins => (
//         dispatch(receivePins(pins))
//     ), err => (null))
// );
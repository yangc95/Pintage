import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';

export const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

export const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

export const fetchPins = () => dispatch => (
  PinAPIUtil.fetchPins().then(pins => (
      dispatch(receivePins(pins))
  ), err => (null))
);

export const fetchPin = () => dispatch => (
  PinAPIUtil.fetchPin().then(pin => (
      dispatch(receivePin(pin))
  ), err => (null))
);

export const createPin = pin => dispatch => (
  PinAPIUtil.createPin(pin).then(pin => (
    dispatch(receivePin(pin))
  ), err => (null))
);

// export const fetchUserPins = (userId) => dispatch => (
//     APIUtil.fetchUserPins(userId).then(pins => (
//         dispatch(receivePins(pins))
//     ), err => (null))
// );
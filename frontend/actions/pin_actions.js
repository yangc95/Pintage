import * as APIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS'

export const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

export const fetchPins = () => dispatch => (
    APIUtil.fetchPins().then(pins => (
        dispatch(receivePins(pins))
    ), err => (null))
);

// export const fetchUserPins = (userId) => dispatch => (
//     APIUtil.fetchUserPins(userId).then(pins => (
//         dispatch(receivePins(pins))
//     ), err => (null))
// );
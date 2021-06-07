import { merge } from 'lodash';

import { 
  RECEIVE_PINS,
  RECEIVE_PIN
} from '../../actions/pin_actions';

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_PINS:
      return merge({}, action.pins);
    case RECEIVE_PIN:
      return merge({}, newState, { [action.pin.id]: action.pin} )
    default:
      return state;
  }
};

export default pinsReducer;
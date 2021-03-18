import { 
  RECEIVE_PINS
} from '../../actions/pin_actions';

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_PINS:
      return Object.assign({}, action.pins);
    default:
      return state;
  }
};

export default pinsReducer;
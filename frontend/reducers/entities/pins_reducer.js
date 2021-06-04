import { 
  RECEIVE_PINS,
  RECEIVE_PIN
} from '../../actions/pin_actions';

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_PINS:
      return Object.assign({}, action.pins);
    case RECEIVE_PIN:
      debugger;
      return Object.assign({}, newState, { [action.pin.id]: action.pin} )
    default:
      return state;
  }
};

export default pinsReducer;
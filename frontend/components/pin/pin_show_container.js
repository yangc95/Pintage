import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import PinShow from './pin_show';
import { fetchPin, destroyPin } from '../../actions/pin_actions';


const mSTP = ({ session, entities: { users, pins }}) => {
  return {
    session: session.id,
    pin: pins,
    user: users[pins.user_id]
  }
}

const mDTP = dispatch => {
  return {
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    destroyPin: (pin) => dispatch(destroyPin(pin))
  }
}

export default withRouter(connect(mSTP, mDTP)(PinShow));
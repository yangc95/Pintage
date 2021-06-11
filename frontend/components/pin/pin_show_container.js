import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import PinShow from './pin_show';
import { fetchPin } from '../../actions/pin_actions';


const mSTP = ({session, entities: { user, pins } }) => {
  // debugger;
  return {
      pin: pins
  }
}

const mDTP = dispatch => {
  return {
      fetchPin: (pinId) => dispatch(fetchPin(pinId)),
  }
}

export default withRouter(connect(mSTP)(PinShow));
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import PinShow from './pin_show';

const mSTP = ({session, entities: { user, pins } }) => {
  // debugger;
  return {
      pin: pins
  }
}

const mDTP = dispatch => {
  return {
      
  }
}

export default withRouter(connect(mSTP)(PinShow));
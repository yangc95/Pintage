import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import BoardShow from './board_show';
import { fetchPin } from '../../actions/pin_actions';

const mSTP = ({ entities: { boards } }) => {
  // debugger;
  return {
      board: boards,
      // pinNum: Object.keys(boards.pins).length,
  }
}

const mDTP = dispatch => {
  return {
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
  }
}

export default withRouter(connect(mSTP, mDTP)(BoardShow));
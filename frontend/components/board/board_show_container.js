import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import BoardShow from './board_show';
import { fetchPin } from '../../actions/pin_actions';

const mSTP = ({ entities: { boards } }) => {
  return {
    board: boards,
  }
}

const mDTP = dispatch => {
  return {
    fetchPin: (pinId) => dispatch(fetchPin(pinId))
  }
}

export default withRouter(connect(mSTP, mDTP)(BoardShow));
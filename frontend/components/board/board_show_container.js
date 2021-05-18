import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import BoardShow from './board_show';

const mSTP = ({ entities: { boards } }) => {
  // debugger;
  return {
      board: boards,
      // pinNum: Object.keys(boards.pins).length,
  }
}

const mDTP = dispatch => {
  return {
      
  }
}

export default withRouter(connect(mSTP, mDTP)(BoardShow));
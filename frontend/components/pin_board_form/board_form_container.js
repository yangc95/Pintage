import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createBoard } from '../../actions/board_actions';
import BoardForm from './board_form';

const mSTP = ({ session }) => {
  // debugger;
  return {
    session: session.id,
  };
};

const mDTP = dispatch => {
	return {
    createBoard: board => dispatch(createBoard(board)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
	};
};

export default withRouter(connect(mSTP, mDTP)(BoardForm));
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mSTP = ({ session, entities: { users, boards } }) => {
  return {
    // currentUser: users[session.currentUser],
    boards
  };
};

const mDTP = dispatch => {
	return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
	};
};

export default withRouter(connect(mSTP, mDTP)(BoardForm));
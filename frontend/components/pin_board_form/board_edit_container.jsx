import React from 'react'
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { destroyBoard } from '../../actions/board_actions';

class BoardEdit extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         };
//     }

    render() {
        const { destroyBoard } = this.props;

        return (
            <div>
                hi
            </div>
        )
    }
}

const mSTP = ({ session }) => {
  return {
    session: session.id,
  };
};

const mDTP = dispatch => {
	return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
	};
};

export default connect(mSTP, mDTP)(BoardEdit);
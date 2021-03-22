import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Link } from 'react-router-dom';

class PinBoardDrop extends React.Component {
    constructor(props) {
		super(props);
    }

    render () {
        const { openModal, closeModal } = this.props;

        // <PinBoardForm closeModal={closeModal} />
        //{/* <button onClick={() => openModal('addPin')}>New Pin</button>
        //<button onClick={() => openModal('addBoard')}>New Board</button> */}

        return (
            <div className="pin-board-modal">
                <button className="button" onClick={closeModal}>
                  <Link to={'/pin'} >New Pin</Link>
                </button>
                <button className="button" onClick={closeModal}>
                  <Link to={'/board'} >New Board</Link>
                </button>

                <button className="pin-board-close" onClick={closeModal}>
                    &times;
                </button>
            </div>
        )
    }
}

const mSTP = ({ session, entities: { users, boards } }) => {
  return {
    currentUser: users[session.currentUser],
    boards
  };
};

const mDTP = dispatch => {
	return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
	};
};

export default connect(mSTP, mDTP)(PinBoardDrop);
import React from 'react'
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { destroyBoard } from '../../actions/board_actions';

class BoardEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: "",
            user_id: this.props.session
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        const { destroyBoard, closeModal } = this.props;

        return (
            <div className="board-edit-div">
                <h1>Edit your board</h1>
                <div className="x-close edit" onClick={closeModal}>
						&times;
				</div>

                <form className="board-edit-form" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input
                    className="board-edit-name"
                    type="text"
                    value={name}
                    onChange={this.update('name')}
                    placeholder='Like "Places to Go" or "Recipes to Make"'
                />
                </form>
                <p>Action</p>
                <button onClick={() => destroyBoard(this.state)}>
                    Delete this board
                </button>
                <p>Delete this board and all it's Pin forever.</p>
                <p>You can't undo this!</p>
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
        destroyBoard: board => dispatch(destroyBoard(board)),    
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
	};
};

export default connect(mSTP, mDTP)(BoardEdit);
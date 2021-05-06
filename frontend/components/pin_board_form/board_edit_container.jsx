import React from 'react'
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { destroyBoard } from '../../actions/board_actions';

class BoardEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
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
        const { destroyBoard } = this.props;

        return (
            <div className="board-edit-div">
                <h1>Edit your board</h1>

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
                <button>
                    Delete this board
                </button>
                
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
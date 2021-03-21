import React from 'react';
// import { closeModal } from '../../actions/modal_actions';

class PinBoardForm extends React.Component {
    constructor(props) {
		super(props);
    }

    render () {
        const { closeModal } = this.props;

        return (
            <div>
            <form className="pin-board-form" onSubmit={this.handleSubmit}>
                {/* <button className="pin-board-close" onClick={closeModal}>
                    &times;
                </button> */}
                <label>Name
                    <input type="text"/>
                </label>
                <label>Name
                    <input type="text"/>
                </label>
                <label>Name
                    <input type="text"/>
                </label>
                <label>Name
                    <input type="text"/>
                </label>
            </form>
            </div>
        )
    }
}

export default PinBoardForm;
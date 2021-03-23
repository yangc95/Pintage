import React from 'react';
// import { closeModal } from '../../actions/modal_actions';

class BoardForm extends React.Component {
    constructor(props) {
		super(props);
        this.state = {
            name: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        e.preventDefault();
    }

    render () {
        // const { closeModal } = this.props;
        return (
            <div>
                <form className="board-form" onSubmit={this.handleSubmit}>
                    <h1 className="board-form-h1">Create board</h1>
                    <label className="board-form-label">Name
                        <input 
                            className="board-form-input"
                            type="text"
                            placeholder='Like "Places to Go" or "Recipes to Make"'
                        />
                    </label>
                    <button className="board-form-button">Create</button>
                </form>
            </div>
        )
    }
}

export default BoardForm;
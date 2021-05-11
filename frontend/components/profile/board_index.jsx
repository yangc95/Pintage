import React from 'react';
import { HiPencil } from 'react-icons/hi';
import { fetchBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import BoardEditContainer from './board_edit_container'

class BoardIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
            // openEditModal: false,
            // activeItemName: "",
            // activeItemId: null,
        // }
        this.handleClick = this.handleClick.bind(this);
    }
// export default ({ boards }) => {
    // componentDidUpdate() {
    // }

    handleClick(boardId) {
        dispatch(fetchBoard(boardId))
            .then(() => dispatch(openModal('editBoard')))
    }

    render() {
        const {boards} = this.props;
        return (
            <div className="profile-div-container">
                {
                    boards.map(board => {
                        let editButton = "";
                        if (board.name !== "Saved") {
                            // editButton = <button className="board-index-edit"><HiPencil/></button>;
                            editButton = <button className="board-index-edit" onClick={() => this.handleClick(board.id)}><HiPencil/></button>;
                        };

                        return (
                                <li className="board-index-li" key={board.id}>
                                    <div className="board-index-img">
                                        {editButton}
                                    </div>

                                    <h2 className="board-index-title">{board.name}</h2>
                                    <p>{0} pins {1} w</p>
                                </li>
                        );
                    })
                }
            </div>
        )
    }
}

export default BoardIndex;
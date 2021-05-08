import React from 'react';
import { HiPencil } from 'react-icons/hi';
import { openModal } from '../../actions/modal_actions';
import BoardEditContainer from '../pin_board_form/board_edit_container'

// class BoardIndex extends React.Component {
//     constructor(props) {
//         super(props)
//     }
export default ({ boards }) => {
//     componentDidUpdate() {
//     }
//     render() {
//         const {boards} = this.props;
    return (
        <div className="profile-div-container">
            {
                boards.map(board => {
                    let editButton = "";
                    if (board.name !== "Saved") {
                        // editButton = <button className="board-index-edit"><HiPencil/></button>;
                        editButton = <button className="board-index-edit" onClick={() => dispatch(openModal('editBoard'))}><HiPencil/></button>;
                        <BoardEditContainer id={board.id}/>
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
    // }
}

// export default BoardIndex;
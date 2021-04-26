import React from 'react';
import { HiPencil } from 'react-icons/hi';

// class BoardIndex extends React.Component {
//     constructor(props) {
//         super(props)
//     }
export default ({ boards }, openModal) => {
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
                        editButton = <button className="board-index-edit"><HiPencil/></button>;
                        // editButton = <button className="board-index-edit" onClick={() => openModal('editBoard')}><HiPencil/></button>;
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
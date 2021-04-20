import React from 'react';

export default ({ boards }) => {
    // debugger;
    return (
        <div className="profile-div-container">
            {
                boards.map(board => {
                    return (
                            <li className="board-index-li" key={board.id}>
                                <img className="board-index-img" src={window.boardURL}/>
                                <h2 className="board-index-title">{board.name}</h2>
                                <p>{}pins {}w</p>
                                {/* <div className="board-img"></div> */}
                            </li>
                    )
                })
            } 
        </div>
    )
}


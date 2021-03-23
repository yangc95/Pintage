import React from 'react';

export default ({ boards }) => {
    return (
        <div className="profile-div-container">
            {
                boards.map(board => {
                    return (
                        <li className="board-index-li" key={board.id}>
                            <img/>
                            <h2 className="board-index-title">{board.name}</h2>
                            <div className="board-img"></div>
                        </li>
                    )
                })
            } 
        </div>
    )
}


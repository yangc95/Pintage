import React from 'react';

export default ({ boards }) => {
    return (
        <div className="profile-div-container">
            {
                boards.map(board => {
                    return (
                        <div className="board-index-div" key={board.id}>
                            <h2 className="board-index-title">{board.name}</h2>
                        </div>
                    )
                })
            } 
        </div>
    )
}


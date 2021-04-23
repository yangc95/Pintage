import React from 'react';

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
                    return (
                            <li className="board-index-li" key={board.id}>
                                <div className="board-index-img" />
                                {/* src={window.boardURL} */}
                                <h2 className="board-index-title">{board.name}</h2>
                                <p>{}pins {}w</p>
                                {/* <div className="board-img"></div> */}
                            </li>
                    )
                })
            } 
        </div>
    )
    // }
}

// export default BoardIndex;
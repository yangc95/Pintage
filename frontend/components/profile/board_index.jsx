import React from 'react';
import TimeAgo from 'javascript-time-ago';
import { HiPencil } from 'react-icons/hi';
import { openModal } from '../../actions/modal_actions';
import { fetchBoard } from '../../actions/board_actions';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
// export default ({ boards }) => {
    // componentDidUpdate(prevProps) {
    //     if (prevProps.boards !== this.props.boards) {
    //         console.log('hi')
    //     }
    // }

  handleEdit(boardId) {
    dispatch(fetchBoard(boardId))
      .then(() => dispatch(openModal('editBoard')))
  }

  handleShow(boardId) {
    dispatch(fetchBoard(boardId))
      .then(this.props.history.push(`/board/${boardId}`))
  }

  componentDidUpdate() {
    console.log('boardindex')
  }

  lastUpdated(lastUpdatedArray) {
    lastUpdatedArray.map(time => (
    ))    
  }

  render() {
    const { boards, pinNums, lastUpdate } = this.props;

    this.lastUpdated(lastUpdate);

    return (
      <div className="profile-div-container">
        {
          boards.map(board => {
            let editButton = "";
            if (board.name !== "Saved") {
            // editButton = <button className="board-index-edit"><HiPencil/></button>;
              editButton = <button className="board-index-edit" onClick={() => this.handleEdit(board.id)}><HiPencil/></button>;
            };

            return (
              <li className="board-index-li" key={board.id}>
                <div className="board-index-img" onClick={() => this.handleShow(board.id)}></div>
                {editButton}

                <h2 className="board-index-title">{board.name}</h2>
                <p>{pinNums.shift()} pins {lastUpdate.shift()}</p>
              </li>
            );
          })
        }
      </div>
    )
  }
}

export default BoardIndex;
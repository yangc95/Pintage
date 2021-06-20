import React from 'react';
import { HiPencil } from 'react-icons/hi';

import BoardEditContainer from '../board_form/board_edit';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinNums: [],
      boardId: '',
      modal: false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleEdit(boardId) {
    // this.props.fetchBoard(boardId)
    //   .then(() => this.props.openModal('editBoard'))
    // this.props.openModal(`editBoard`)
  }

  handleShow(boardId) {
    this.props.fetchBoard(boardId)
      .then(this.props.history.push(`/board/${boardId}`))
  }

  timeAgo(time) {
    const currentTime = new Date();
    const prevTime = new Date(time);

    let seconds = Math.floor((currentTime - prevTime) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days / 7);

    let timeAgoInWords;
    if (weeks >= 1) {
      timeAgoInWords = `${weeks}w`;
    } else if (days >= 1) {
      timeAgoInWords = `${days}d`;
    } else if (hours >= 1) {
      timeAgoInWords = `${hours}h`;
    } else if (minutes >= 1) {
      timeAgoInWords = `${minutes}m`;
    } else {
      timeAgoInWords = `${seconds}s`;
    }

    return timeAgoInWords;
  }

  render() {
    const { boards, lastUpdate, pinNums } = this.props;

    let newTimes = lastUpdate.map(time => (this.timeAgo(time)));
    let pinNumArr = [...pinNums];

    return (
      <div className="profile-div-container">
        {
          boards.map(board => {
            // let editButton = "";
            // if (board.name !== "Saved") {
            //   editButton = <button className="board-index-edit" onClick={() => this.handleEdit(board.id)}><HiPencil/></button>;
            // };

            let pinNum = pinNumArr.shift() || 0;
            let newTime = newTimes.shift();

            return (              
              <li className="board-index-li" key={board.id}>
                <div className="board-index-img" onClick={() => this.handleShow(board.id)}></div>
                {
                  board.name !== "Saved" ? 
                    <button className="board-index-edit" onClick={() => this.setState({boardId: board.id})}><HiPencil/></button>
                    : ""
                }
                <div className={`board-index-info ${board.name !== "Saved" ? 'other-boards' : ''}`}>
                  <h2 className="board-index-title">{board.name}</h2>
                  <p>{ pinNum } pins <span className="board-index-time-ago">{ !newTime || newTime.includes("NaN") ? "0s" : newTime }</span></p>
                </div>
              </li>
            );
          })
        }
        <div className={`modal-background editBoard ${this.state.modal}`} onClick={closeModal}>
          <span className="modal-child" onClick={e => e.stopPropagation()}>
            <BoardEditContainer
              board={boards[this.state.boardId]}
            />
          </span>
        </div>
      </div>
    )
  }
}

export default BoardIndex;
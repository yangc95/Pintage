import React from 'react';
import { HiPencil } from 'react-icons/hi';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import timeago from 'epoch-timeago';
import { openModal } from '../../actions/modal_actions';
import { fetchBoard } from '../../actions/board_actions';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinNums: []
    }
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

  componentDidMount() {
    this.setState({ pinNums: this.props.pinNums })
  }

  componentDidUpdate() {
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

    // TimeAgo.addLocale(en);
    // const timeAgo = new TimeAgo('en-US');
    // let currentTime = Math.floor(new Date().getTime()/1000.0)
    // debugger;
    // // return newTime;
    // return 1
    // return timeAgo.format(Date.now() - prevTime, 'mini')
  }

  render() {
    const { boards, lastUpdate } = this.props;
    const { pinNums } = this.state;
    let newTimes = lastUpdate.map(time => (this.timeAgo(time)));
    let pinNumArr = [...pinNums];

    return (
      <div className="profile-div-container">
        {
          boards.map(board => {
            let editButton = "";
            if (board.name !== "Saved") {
              editButton = <button className="board-index-edit" onClick={() => this.handleEdit(board.id)}><HiPencil/></button>;
            };

            let pinNum = pinNumArr.shift() || 0;
            let newTime = newTimes.shift();

            return (
              <li className="board-index-li" key={board.id}>
                <div className="board-index-img" onClick={() => this.handleShow(board.id)}></div>
                {editButton}
                <div className={`board-index-info ${editButton !== "" ? 'other-boards' : ''}`}>
                  <h2 className="board-index-title">{board.name}</h2>
                  <p>{ pinNum } pins <span className="board-index-time-ago">{ newTime.includes("NaN") ? "0s" : newTime }</span></p>
                </div>
              </li>
            );
          })
        }
      </div>
    )
  }
}

export default BoardIndex;
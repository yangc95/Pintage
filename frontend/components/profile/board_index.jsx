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
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    let prevTime = Math.floor(new Date(time).getTime()/1000.0);
    let currentTime = Math.floor(new Date().getTime()/1000.0)
    // debugger;
    // // return newTime;
    // return 1
    return timeAgo.format(Date.now() - prevTime, 'mini')
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

            return (
              <li className="board-index-li" key={board.id}>
                <div className="board-index-img" onClick={() => this.handleShow(board.id)}></div>
                {editButton}
                <div className={`board-index-info ${editButton !== "" ? 'other-boards' : ''}`}>
                  <h2 className="board-index-title">{board.name}</h2>
                  <p>{ pinNum } pins {}</p>
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
import React from 'react';
import { HiPlus } from 'react-icons/hi';
import { BsQuestion } from 'react-icons/bs';

import BoardIndex from '../board/board_index';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
      question: false,
      // boards: null
    }
  }

  componentDidMount() {
    this.props.inactiveNavbar();
    this.props.fetchBoards(this.props.session)
      // .then(() => this.setState({ boards: this.props.boards }))
  }
 
  render() {
    // debugger;
    const { openModal, currentUser, boards } = this.props;
    const { dropdown, question } = this.state;
    const userEmail = currentUser.email.split("@")[0].split(".").join(""); 
        
    let boardIndex = "";
    if (boards) boardIndex = 
    <BoardIndex 
      boards={this.props.boards} 
      history={this.props.history} 
      pinNums={this.props.pinNums}
      lastUpdate={this.props.lastUpdate}
    />;

    let dropdownButton;
    (dropdown) ? dropdownButton = 'isActive' : dropdownButton = '' ;

    let questionButton;
    (question) ? questionButton = 'isActive' : questionButton = '' ;

    const addDropDown = 
    <div className={`profile-add-buttons ${dropdownButton}`} onClick={() => this.setState({dropdown: !dropdown})}>
      <p>Create</p>
      <button className="profile-add-pin" onClick={() => openModal('addPin')}>Pin</button>
      <button className="profile-add-board" onClick={() => openModal('addBoard')}>Board</button>
    </div>;

    let questionDropDown = "";
    if (question) {
      questionDropDown =
      <div className="question-drop-down">
        <div className="question-info">
          <p>Pintage is a Pinterest clone!</p>
          <p>Create a Board and add Pins to that Board</p>
        </div>
        <div className="question-social-links">
          <a target="_blank" href="https://github.com/yangc95/Pintage">Github</a>
          <a target="_blank" href="https://yangc95.github.io/">Portfolio</a>
          <a target="_blank" href="https://www.linkedin.com/in/yang-christine/">LinkedIn</a>
        </div>
      </div>
    };

    return (
      <div className="profile-div" onClick={() => {
        if (dropdown) {
          this.setState({dropdown: !dropdown})
        } else if (question) {
          this.setState({question: !question})
        } else {
          null
        }}}>
        <div className="profile-name">
          <div className="profile-image">
            {currentUser.username.split("")[0]}
          </div>
          {currentUser.username}
          <span className="profile-user-name">
            @{userEmail}
          </span>
        </div>
        <div className="profile-add-button-wrapper">
          <button 
            className={`profile-add-button ${dropdownButton}`} 
            onClick={() => this.setState({dropdown: !dropdown})}>
            <HiPlus />
          </button>
          {addDropDown}
        </div>
        <span className="profile-board-index">
          {boardIndex}
        </span>
        <button 
          className={`profile-question-button ${questionButton}`} 
          onClick={() => this.setState({question: !question})}>
          <BsQuestion />
        </button>
        {questionDropDown}
      </div>
    )
  }
}

export default Profile;
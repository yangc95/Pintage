import React from 'react';
import { HiPlus } from 'react-icons/hi';

import BoardIndex from './board_index';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
            boards: {}
        }
    }

    componentDidMount() {
        this.props.fetchBoards(this.props.session)
        .then(() => this.setState({boards: this.props.boards, prevBoards: this.props.prevBoards}))
    }; 
            
    render() {
        const { openModal, closeModal, currentUser} = this.props;
        const { boards, dropdown } = this.state;
        const userEmail = currentUser.email.split("@")[0].split(".").join(""); 
            
        let boardIndex = "";
        if (boards) {
            boardIndex = <BoardIndex boards={this.props.boards}/>
        }

        let dropdownButton;
        (dropdown) ? dropdownButton = 'isActive' : dropdownButton = '' ;

        return (
            <div className="profile-div">
                <div className="profile-name">
                    <img src={window.profileURL}/>
                    {currentUser.username}
                    <span className="profile-user-name">@{userEmail}</span>
                </div>
                <div className="profile-add-button-wrapper">
                    <button className={`profile-add-button ${dropdownButton}`} onClick={() => this.setState({dropdown: !dropdown})}>
                        <HiPlus />
                    </button>
                    <div className={`profile-add-buttons ${dropdownButton}`} onClick={() => this.setState({dropdown: !dropdown})}>
                        <p>Create</p>
                        <button className="profile-add-pin" onClick={() => openModal('addPin')}>Pin</button>
                        <button className="profile-add-board" onClick={() => openModal('addBoard')}>Board</button>
                    </div>
                </div>
                <span className="profile-board-index">
                    {boardIndex}
                </span>

            </div>
        )
    }
}

export default Profile;
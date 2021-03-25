import React from 'react';
import BoardIndex from './board_index';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        }
    }

    componentDidMount() {
        // debugger;
        this.props.fetchBoards(this.props.session)
    };

    render() {
        const { openModal, closeModal, currentUser } = this.props;
        let boardIndex = "";
        if (this.props.boards) {
            boardIndex = <BoardIndex boards={this.props.boards}/>
        }

        let dropdownButton;
        (this.state.dropdown) ? dropdownButton = 'isActive' : dropdownButton = '' ;

        // debugger;
        return (
            <div className="profile-div">
                {/* <div className="profile-photo">PHOTO</div> */}
                <div className="profile-name">{currentUser.username}</div>
                {/* <div className="profile-followers">FOLLOWERS</div> */}
                <span className="profile-board-index">
                    {boardIndex}
                </span>
                {/* <button className="profile-add-button" onClick={}>
                    &#43;
                </button> */}

                <div className={`profile-add-buttons ${dropdownButton}`} onClick={() => this.setState({dropdown: !this.state.dropdown})}>
                    <p>Create</p>
                    <button className="profile-add-pin" onClick={() => openModal('addPin')}>Pin</button>
                    <button className="profile-add-board" onClick={() => openModal('addBoard')}>Board</button>
                </div>
                <button className={`profile-add-button ${dropdownButton}`} onClick={() => this.setState({dropdown: !this.state.dropdown})}>
                    &#43;
                </button>
            </div>
        )
    }
}

export default Profile;
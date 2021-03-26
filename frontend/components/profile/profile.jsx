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

        return (
            <div className="profile-div">
                <div className="profile-name">
                    <img src={window.profileURL}/>
                    {currentUser.username}
                </div>
                <span className="profile-board-index">
                    {boardIndex}
                </span>

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
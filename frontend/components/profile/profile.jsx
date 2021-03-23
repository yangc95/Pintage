import React from 'react';
import BoardIndex from './board_index';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger;
        this.props.fetchBoards(this.props.session)
    };

    render() {
        const { openModal } = this.props;
        let boardIndex = "";
        if (this.props.boards) {
            boardIndex = <BoardIndex boards={this.props.boards}/>
        }

        // debugger;
        return (
            <div className="profile-div">
                {/* <div className="profile-photo">PHOTO</div> */}
                <div className="profile-name">Username</div>
                {/* <div className="profile-followers">FOLLOWERS</div> */}
                <span className="profile-board-index">
                    {boardIndex}
                </span>
                <button className="profile-add-board" onClick={() => openModal('addBoard')}>&#43;</button>
                <button className="profile-add-pin" onClick={() => openModal('addPin')}></button>
            </div>
        )
    }
}

export default Profile;
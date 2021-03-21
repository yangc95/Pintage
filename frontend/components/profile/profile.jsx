import React from 'react';
import BoardIndex from './board_index';

class Profile extends React.Component {
    componentDidMount () {
        this.props.fetchBoards()
    };

    render() {
        const { openModal } = this.props;
        // debugger;
        let boardIndex = "";
        if (this.props.boards) {
            boardIndex = <BoardIndex boards ={this.props.boards}/>
        }
        return (
            <div>
                <div className="profile-photo">PHOTO</div>
                <div className="profile-name">NAME</div>
                <div className="profile-followers">FOLLOWERS</div>
                <div>
                    {boardIndex}
                </div>
                <button className="profile-add" onClick={() => openModal('pbDropdown')}>&#43;</button>
            </div>
        )
    }
}

export default Profile;
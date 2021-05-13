import React from 'react';
import { HiPlus } from 'react-icons/hi';

import BoardIndex from './board_index';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
            boards: null
        }
    }

    componentDidMount() {
        // console.log('profile mounted')
        this.props.fetchBoards(this.props.session)
            .then(() => this.setState({ boards: this.props.boards }))
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.boards !== this.state.boards) {
    //         this.setState({ boards: this.props.boards })
    //     }

    //     if (prevProps.boards !== this.props.boards) {
    //         this.setState({ boards: this.props.boards})
    //     }
        // console.log('profile updated')
        // console.log(prevProps.boards)
        // console.log(this.state.boards)
    // }
            
    render() {
        const { openModal, currentUser} = this.props;
        const { boards, dropdown } = this.state;
        const userEmail = currentUser.email.split("@")[0].split(".").join(""); 
            
        let boardIndex = "";
        if (boards) {
            boardIndex = <BoardIndex boards={this.props.boards} history={this.props.history}/>
        }

        let dropdownButton;
        (dropdown) ? dropdownButton = 'isActive' : dropdownButton = '' ;

        return (
            <div className="profile-div" onClick={() => dropdown === true ? this.setState({dropdown: !dropdown}) : null}>
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
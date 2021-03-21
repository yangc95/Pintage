import React from 'react'

class Profile extends React.Component {
    // componentDidMount () {
    //     this.props.fetchBoards()
    // };

    render() {
        // let boardIndex = "";
        // if (this.props.boards) {
        //     boardIndex = <BoardIndex boards ={this.props.boards}/>
        // }

        return (
            <div>
                <div className="profile-photo"></div>
                <div className="profile-name"></div>
                <div className="profile-followers"></div>
                <div>
                    {/* {boardIndex} */}
                </div>
            </div>
        )
    }
}

export default Profile;
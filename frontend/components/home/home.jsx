import React from 'react';
import PinsIndex from '../pin/pin_index';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const { activeNavbar, fetchBoards, fetchPins, currentUser } = this.props;

    activeNavbar();
    fetchBoards(currentUser.id)
      .then(() => fetchPins());
  }

  render() {
    const { pins, boards, currentUser, session, fetchPin, history, createPinBoard} = this.props;
    // debugger;
    
    // Object.keys(boards).forEach( key => { if (typeof boards[key] !== 'object') delete boards[key] })

    let pinIndex = "";
    if (pins && boards) {
      pinIndex = <PinsIndex
        pins={pins}
        currentUser={currentUser}
        session={session}
        fetchPin={fetchPin}
        history={history}
        boards={boards}
        createPinBoard={createPinBoard}/>
    }

    return (
      <div className="home-div">
        {pinIndex}
      </div>
    )
  }
}

export default Home;
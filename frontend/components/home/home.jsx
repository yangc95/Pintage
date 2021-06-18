import React from 'react';
import PinsIndex from '../pin/pin_index';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.activeNavbar();
    this.props.fetchBoards(this.props.currentUser.id)
      .then(() => this.props.fetchPins());
  }

  render() {
    // debugger;
    let pinIndex = "";
    if (this.props.pins && this.props.boards) {
      pinIndex = <PinsIndex
        pins={this.props.pins}
        currentUser={this.props.currentUser}
        session={this.props.session}
        fetchPin={this.props.fetchPin}
        history={this.props.history}
        boards={this.props.boards}/>
    }

    return (
      <div className="home-div">
        {pinIndex}
      </div>
    )
  }
}

export default Home;
import React from 'react';
import PinsIndex from './pin_index';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.activeNavbar();
    this.props.fetchPins();
  }

  render() {
    let pinIndex = "";
    if (this.props.pins) {
      pinIndex = <PinsIndex
        pins={this.props.pins}
        currentUser={this.props.currentUser}
        session={this.props.session}
        fetchPin={this.props.fetchPin}/>
    }

    return (
      <div className="home-div">
        {pinIndex}
      </div>
    )
  }
}

export default Home;
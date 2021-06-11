import React from 'react';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   pinId: null,
        //   pinTitle: null,
        //   pinAbout: null,
        //   // pinPhoto: null,
        //   user: null,
        // }
        this.handleBack = this.handleBack.bind(this);
    }

    // componentWillUpdate() {
    //   this.setState({
    //     pinId: this.props.pin.id,
    //     pinTitle: this.props.pin.title,
    //     pinAbout: this.props.pin.about,
    //     // pinPhoto: this.props.pin.photoUrl,
    //     user: this.props.user.username
    //   })
    // }

    handleBack() {
      this.props.history.push('/_saved')
    }

    render() {
      // if (this.props.pin) {
      //   this.setState({
      //     pinId: this.props.pin.id,
      //     pinTitle: this.props.pin.title,
      //     pinAbout: this.props.pin.about,
      //     // pinPhoto: this.props.pin.photoUrl,
      //     user: this.props.user.username
      //   })
      // }
      // debugger;

      // const { pinId, pinTitle, pinAbout, user } = this.state;
      return (
          <div className="pin-show">
            <button onClick={() => this.handleBack()}>Back to Profile</button>

            <div>
              {/* <img className="pin-index-photo" src={pin.photoUrl}/> */}
              <h2 className="pin-index-title">{this.props.pin.title}</h2>
              <h3>{this.props.pin.about}</h3>
            </div>
          </div>
      )
    }
}

export default PinShow;
import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack() {
      this.props.history.push('/_saved')
    }

    render() {

      return (
          <div className="pin-show">
            <button className="hi-arrow-left" onClick={() => this.handleBack()}>
              <HiArrowLeft />
            </button>

            <div className="pin-show-item">
              {/* <img className="pin-index-photo" src={pin.photoUrl}/> */}
              <h2 className="pin-index-title">{this.props.pin.title}</h2>
              <h3>{this.props.pin.about}</h3>
            </div>
          </div>
      )
    }
}

export default PinShow;
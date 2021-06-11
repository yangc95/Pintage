import React from 'react';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pin: null
        }
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount() {
      this.props.fetchPin(pinId).then(pin => this.setState({pin: pin}))
    }

    handleBack() {
      this.props.history.push('/_saved')
    }

    render() {
        return (
            <div className="pin-show">
              <button onClick={() => this.handleBack()}>Back to Profile</button>
            </div>
        )
    }
}

export default PinShow;
import React from 'react';

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
              <button onClick={() => this.handleBack()}>Back to Profile</button>
            </div>
        )
    }
}

export default PinShow;
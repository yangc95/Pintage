import React from 'react';
import PinsIndex from './pin_index'

class Home extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     pins: []
        // }
    }

    componentDidMount () {
        this.props.fetchPins()
    };

    render() {
        let pinIndex = "";
        if (this.props.pins) {
            pinIndex = <PinsIndex pins ={this.props.pins}/>
        }

        return (
            <>
            {pinIndex}
            </>
        )
    }
}

export default Home;
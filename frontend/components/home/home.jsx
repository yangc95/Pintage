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
        // this.setState({ pins })
            // .then(pins => {
            //     this.setState({ pins });
            // });
    };

    render() {
        let pinIndex = "";
        if (this.props.pins) {
            pinIndex = <PinsIndex pins ={this.props.pins}/>
        }
        // console.log(this.props.pins)
        // const pins = this.props.fetchPins()
        // debugger;
        return (
            <div>WHY IS NOTHING SHOWING UP
                {pinIndex}
            </div>
        )
    }
}

export default Home;
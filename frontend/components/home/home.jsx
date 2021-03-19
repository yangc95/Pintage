import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPins();
    }

    render() {
        const { pins } = this.props;
        // debugger;
        return (
            <div>
                {
                    
                }
            </div>
        )
    }
}

export default Home;
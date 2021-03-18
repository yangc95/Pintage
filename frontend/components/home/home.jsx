import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPins();
    }

    render() {
        debugger;
        return (
            <div>This is where all the posts should show...
            </div>
        )
    }
}

export default Home;
import React from 'react';

class BoardShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="board-show">
                <h1>Board Name</h1>
                <h2>{0} Pins</h2>

                <div className="board-show-pin-index">
                    Pins
                </div>
            </div>
        )
    }
}

export default BoardShow;
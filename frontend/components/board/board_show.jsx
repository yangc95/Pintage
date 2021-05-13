import React from 'react';

class BoardShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="board-show">
                <h1>Board Name</h1>

                <p>{0} Pins</p>
                <div>
                    Pins
                </div>
            </div>
        )
    }
}

export default BoardShow;
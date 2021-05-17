import React from 'react';

class BoardShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { board } = this.props;

        return (
            <div className="board-show">
                <h1>{board.name}</h1>
                <h2>{0} Pins</h2>

                <div className="board-show-pin-index">
                    Pins
                </div>
            </div>
        )
    }
}

export default BoardShow;
import React from 'react';

class BoardShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     board: null,
        // }
    }

    // componentDidMount() {
        // if (this.props.board) this.setState({ board: this.props.board});
        // if (!this.props.board.pins) this.props.history.push('/_saved')
    // }

    render() {
        const { board } = this.props;
        // debugger;
        let pinNum = '';
        if (board.pins) pinNum = Object.keys(board.pins).length;
        // if (!board.pins) this.props.history.push('/_saved')

        return (
            <div className="board-show">
                <h1>{board.name}</h1>
                <h2>{pinNum} Pins</h2>

                <div className="board-show-pin-index">
                    Pins
                </div>
                <button onClick={() => this.props.history.push('/_saved')}>Back to Boards</button>
            </div>
        )
    }
}

export default BoardShow;
import React from 'react';
import Masonry from 'react-masonry-css';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pins: [],
    }
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillUnmount() {
    this.setState({ pins: [] })
  }

  handleBack() {
    this.props.history.push('/_saved')
  }
  // componentDidMount() {
    // if (this.props.board) this.setState({ board: this.props.board});
    // if (!this.props.board.pins) this.props.history.push('/_saved')
  // }

  render() {
    const { board } = this.props;
    // debugger;
    let pinNum = '';
    // let pinArray = [];
    if (board.pins) {
      let pinKeys = Object.keys(board.pins);
      pinNum = pinKeys.length;
      pinKeys.forEach(key => this.state.pins.push(board.pins[key]));
    };
    // if (!board.pins) this.props.history.push('/_saved')
    const breakpoints = {
    default: 4,
    1085: 3,
    825: 2,
    565: 1
    }

    return (
      <div className="board-show">
        <h1>{board.name}</h1>
        <h2>{pinNum} Pins</h2>

        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {
            this.state.pins.map(pin => {
              return (
                <div className="board-show-pin-index">
                  <div className="pin-index-image"></div>
                  <h2 className="pin-index-title">{pin.title}</h2>
                  <p className="pin-index-about">{pin.about}</p>
                </div>
              )
            })
          }
        </Masonry>

        <button onClick={() => this.handleBack()}>Back to Boards</button>
      </div>
    )
  }
}

export default BoardShow;